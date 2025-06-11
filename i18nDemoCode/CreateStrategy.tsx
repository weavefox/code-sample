import { useUrlParams } from '@/components/Hooks';
import {
  convertInputCondition,
} from '@/pages/Strategy/enumUtils';
import { queryChangeType } from '@/services/openopscloud/ChangeTypeController';
import {
  getPolicyVersionById,
  patchBatchPolicyVersion,
  putBatchPolicyVersion,
  updatePolicyVersionFilterAndStatus,
} from '@/services/openopscloud/PolicyVersionController';

import React from 'react';
import { useRef, useState, useRequest } from 'ahooks';
import { ArrowLeftOutlined, CheckCircleFilled } from '@ant-design/icons';
import {
  Button,
  Card,
  Form,
  message,
  Space,
  Spin,
  Steps,
  theme,
  Tooltip,
} from 'antd';
import dayjs from 'dayjs';
import BasicForm from './component/BasicForm';
import FilterForm from './component/FilterForm';
import StrategyForm from './component/StrategyForm';
import styles from './index.less';

export const getHashParams = () => {
  const url = new URL(window.location.href);
  return Object.fromEntries(new URLSearchParams(url.hash.substring(1)));
};

export default () => {
  const urlParams = useUrlParams();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [type, setType] = useState('');

  const [basicData, setBasicData] = useState<any>();
  const [disable, setDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [modifyTime, setModifyTime] = useState<string>();

  const [form1] = Form.useForm();
  const form2 = useRef<any>();
  const [form3] = Form.useForm();
  const formValues = Form.useWatch([], form1);
  const formScopeType = Form.useWatch('scopeType', form1);

  const [detailsDataSource, setDetailsDataSource] = useState<any>({});
  const steps = [
    {
      title: '填写基础信息',
    },
    {
      title: '配置筛选项',
    },
    {
      title: '配置策略',
    },
  ];


  const handleCreatePolicy = async (subType: string, values: any) => {
    try {
      const payload = {}
      const res = await createPolicy(payload);
      if (!res.success) {
        message.error(res.msg || '创建策略失败');
        return;
      }

      setDisable(true);
      const policyId = res?.data.policyWithVersion.policy.id;
      const policyVersionId = res?.data.policyWithVersion.policyVersion.id;

      setBasicData(res?.data.policyWithVersion.policy);

      return {
        policyId,
        policyVersionId,
      };
    } catch (error) {
      message.error(`创建策略失败${error}`);
      console.error('创建策略出错:', error);
      return;
    }
  };

  const handleCurrent0 = async (subType) => {
    try {
      form1
        .validateFields()
        .then((value) => {
          handleCreatePolicy(subType, value);
        })
        .catch((error) => {
          console.log('表单验证失败1', error);
          if (!error.values?.filterLogicalOperator)
            message.error(`表单验证失败`, 3);
          else message.error(`请先完成第一步的信息填写`, 3);
          return;
        });
    } catch (error) {
      message.error(`表单验证失败${error}`, 3);
      return;
    }
  };

  const next = async () => {
    try {
      if (current === 0) {
        console.log(form1?.getFieldsValue());

        await form1
          .validateFields()
          .then(() => {
            setCurrent((prev) => prev + 1);
          })
          .catch((error) => {
            message.error(`表单验证失败`, 3);
            console.error('表单验证失败2', error);
            return false;
          });
      } else if (current === 1) {
        await Promise.all([
          form1.validateFields(),
          form2.current.validateFields(),
        ])
          .then(() => {
            setCurrent((prev) => prev + 1);
          })
          .catch((error) => {
            message.error(`表单验证失败`, 3);
            console.error('表单验证失败3', error);
            return;
          });
      }
    } catch (error) {
      message.error(`数据处理错误${error}`, 3);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const {
    run: updatePolicyVersionFilterAndStatusRun,
    loading: updatePolicyVersionFilterAndStatusLoading,
  } = useRequest(updatePolicyVersionFilterAndStatus, {
    manual: true,
    onSuccess: (res: any) => {
      if (!res.data || !res.data.policyVersion) {
        message.error(`保存失败${res?.msg}`, 3);
        return;
      }
      setModifyTime(res.data.policyVersion.gmtModified);
      message.success('保存成功');
    },
    onError: (error) => {
      console.log('保存失败', error);
    },
  });




  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    margin: '20px auto',
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };




  const isButtonDisabled = current === 0 ? nextDisable : false;

  const handleSubmit = async (subType: string) => {
    try {
      const { policyId, id } = getHashParams();

      if (policyId && id) {
        if (current === 1) {
          const [data1, data2] = await Promise.all([
            form1.validateFields(),
            form2.current.validateFields(),
          ]).catch((error) => {
            message.error('请检查第一页到第二页必填参数是否都已填写', 3);
            throw new Error('请检查第一页到第二页必填参数是否都已填写');
          });
          const { policyId, id } = getHashParams();
          updatePolicyVersionFilterAndStatusRun(
            {
              policyId,
              id,
            },
            {
              filterLogicalOperator: data1?.filterLogicalOperator,
            },
          );
        } else if (current === 2) {
          const [data1, data2, data3] = await Promise.all([
            form1.validateFields(),
            form2.current.validateFields(),
            form3.validateFields(),
          ]).catch((error) => {
            try {
              const { errorFields } = error;
              const configIndex = errorFields?.findIndex((item: any) =>
                item?.name?.includes('dimensionConfig'),
              );
              if (configIndex !== -1) {
                message.error(
                  `请检查第${errorFields[configIndex]?.name?.[1] + 1
                  }个变更阶段下的第${errorFields[configIndex]?.name?.[3] + 1
                  }个分批维度配置是否都已填写完整`,
                  3,
                );
                throw new Error('请检查分批维度配置是否都已填写');
              }

              message.error('请检查所有页面必填参数是否都已填写', 3);
              throw new Error('请检查所有页面必填参数是否都已填写');
            } catch (e) {
              message.error('请检查所有页面必填参数是否都已填写', 3);
              throw new Error('请检查所有页面必填参数是否都已填写');
            }
          });

          if (data3?.batchConfigs.length === 0) {
            message.info('请至少配置一个变更阶段', 3);
            return;
          }

          const isValid = data3?.batchConfigs.every(
            (item) => item.dimensionConfig && item.dimensionConfig.length > 0,
          );

          if (!isValid && subType) {
            message.info('每个变更阶段中至少要有一个维度配置', 3);
            return;
          }

          const { policyId, id } = getHashParams();
          const handleData: any = buildStrategyPayloud(
            policyId,
            id,
            data1,
            data2,
            data3,
          );

          const res: any =
            subType === 'save'
              ? await patchBatchPolicyVersion(
                handleData.params,
                handleData.body,
              )
              : await putBatchPolicyVersion(handleData.params, handleData.body);
          if (res.success) {
            subType === 'save' &&
              res.data &&
              setModifyTime(res.data.policyVersion.gmtModified);
            subType === 'save'
              ? message.success('保存成功')
              : message.success(
                `变更策略：${res?.data?.policy?.name}已成功提交!`,
              );
            subType === 'save' ? null : history.push('/strategy/list');
          } else {
            message.error(`提交失败${res?.msg}`);
          }
        }
      } else {
        await handleCurrent0(subType);
      }

    } catch (errors) {
      console.error('验证错误:', errors);
    }
  };
  return (
    <>
      <div>
        <div>
          <ArrowLeftOutlined
            className={styles.backIcon}
            onClick={() => {
              history.push('/strategy/list');
            }}
          />
          {urlParams?.type === 'edit' ? '编辑策略' : ' 新建策略'}
        </div>
        <Space size={16}>
          {basicData?.gmtModified && (
            <Space>
              <CheckCircleFilled /> 已保存
              {dayjs(modifyTime).format('HH:mm:ss')}
            </Space>
          )}
          <Button
            disabled={Boolean(getHashParams()?.policyId) && current === 0}
            onClick={() => {
              handleSubmit('save');
            }}
            loading={updatePolicyVersionFilterAndStatusLoading}
          >
            保存
          </Button>
        </Space>
      </div>
      <Spin spinning={getPolicyVersionByIdLoading}>
        <Card>
          <Steps />
          <div >
            <BasicForm
              form={form1}
              disabled={disable}
              basicData={basicData}
              queryChangeTypeRun={queryChangeTypeRun}
            />
          </div>
          <div >
            <FilterForm
              form={form1}
              formRef={form2}
              current={current}
              detailsDataSource={detailsDataSource}
            />
          </div>
          <div >
            <StrategyForm
              preForm={form1}
              form={form3}
              show={current === 2}
              type={type}
            />
          </div>
          <div >
            <Button onClick={() => prev()}>
              上一步
            </Button>
            {current < steps.length - 1 && (
              <Tooltip
                title={isButtonDisabled ? '必填项尚未填写' : null}
                placement='top'
              >
                <Button
                  type='primary'
                  onClick={() => next()}
                  disabled={isButtonDisabled}
                >
                  下一步
                </Button>
              </Tooltip>
            )}

            {current === steps.length - 1 && (
              <Button
                type='primary'
                onClick={() => {
                  handleSubmit('submit');
                }}
              >
                提交
              </Button>
            )}
          </div>
        </Card>
      </Spin>
    </>
  );
};
