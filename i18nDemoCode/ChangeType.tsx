import React from 'react';
import { useState } from 'ahooks';
import { useUrlParams } from '@/components/Hooks';
import ResponsibleOwners from '@/components/ResponsibleOwners';
import SubmitButton from '@/components/SubmitButton';
import { RISK_LEVEL_OPTIONS } from '@/pages/ChangeRegistration/constants';
import { options as CHANGE_FILTER_OPTIONS } from '@/pages/Strategy/Create/component/FilterForm/format';
import { generatePlatformId } from '@/utils';
import {
    Cascader,
    Form,
    Input,
    Radio,
    Row,
    Select,
} from 'antd';
import styles from './index.less';

interface IProps {
    detailsDataSource?: any;
    loading?: boolean;
}


const { SHOW_CHILD } = Cascader;
const ChangeTypeForm = (props: IProps) => {
    const [form] = Form.useForm();
    const urlParams = useUrlParams();

    const [getTargetOption, setGetTargetOption] = useState([]);
    const [getEffectOption, setGetEffectOption] = useState([]);
    const [labelValueResponsesOption, setLabelValueResponsesOption] = useState(
        [],
    );

    const [effectDimensionsOption, setEffectDimensionsOption] = useState([]);
    const [changePlatformOption, setChangePlatformOption] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);
    const [appOptions, setAppOptions] = useState<any>([]);
    const [platformId, setPlatformId] = useState('');
    const { detailsDataSource } = props;
    const customStyle = {
        width: 320,
    };


    return (
        <Form form={form} layout='vertical' className={styles.formWrapper} name='validateOnly'>
            <div>
                <Row className={styles.row}>
                    <div className={styles.infoTitle}>基本信息</div>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='platformName'
                        label='归属平台'
                        rules={[{ required: true, message: '请输入归属平台' }]}
                        style={{ width: 664 }}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            onChange={(value, options: any) => {
                                setPlatformId(options?.platformId);
                            }}
                            options={changePlatformOption || []}
                        />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='name'
                        label='变更类型名称'
                        rules={[{ required: true, message: '请输入变更类型名称' }]}
                        style={customStyle}
                    >
                        <Input
                            placeholder='最多20个字符组成'
                            className={styles.inputField}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const name = e.target.value;
                                const changeNmae = generatePlatformId(name);

                                const platformName = form?.getFieldValue('platformName');
                                const changeTypeId = `${generatePlatformId(
                                    platformName?.label || platformName || '',
                                )}.${changeNmae}`;
                                if (urlParams?.changeTypeDetailId) return;
                                form.setFieldsValue({ changeTypeId });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name='changeTypeId'
                        label='变更类型ID'
                        rules={[{ required: true, message: '请输入变更类型ID' }]}
                        style={customStyle}
                    >
                        <Input
                            placeholder='请输入变更类型ID'
                            className={styles.inputField}
                            disabled={detailsDataSource?.id}
                        />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='targetObjectType'
                        label='操作对象'
                        rules={[{ required: true, message: '请选择操作对象' }]}
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            options={getTargetOption || []}
                        />
                    </Form.Item>
                    <Form.Item
                        name='effectObjectType'
                        label='生效对象'
                        rules={[{ required: true, message: '请选择生效对象' }]}
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            onChange={(value, options: any) => {
                                setEffectDimensionsOption(options?.effectDimensions || []);
                                form.setFieldsValue({
                                    effectDimensions: [],
                                });
                            }}
                            options={getEffectOption || []}
                        />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='effectDimensions'
                        label='生效对象维度'
                        tooltip='生效对象的属性'
                        rules={[{ required: true, message: '请选择生效对象维度' }]}
                        style={{ width: 664 }}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            maxTagCount='responsive'
                            mode='multiple'
                            options={effectDimensionsOption || []}
                        />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <ResponsibleOwners
                        form={form}
                        detailsDataSource={{
                            ...detailsDataSource,
                            mainOwner: detailsDataSource?.mainOwner,
                        }}
                        required={true}
                        label='变更负责人'
                        name='mainOwner'
                    />
                    <ResponsibleOwners
                        form={form}
                        detailsDataSource={{
                            ...detailsDataSource,
                            backupOwner: detailsDataSource?.backupOwner,
                        }}
                        required={true}
                        label='变更备负责人'
                        name='backupOwner'
                    />
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='riskLevel'
                        label='变更类型风险等级'
                        rules={[{ required: true, message: '请选择变更类型风险等级' }]}
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            options={RISK_LEVEL_OPTIONS}
                        />
                    </Form.Item>
                    <ResponsibleOwners
                        form={form}
                        detailsDataSource={{
                            ...detailsDataSource,
                            riskSupervisors: detailsDataSource?.riskSupervisors,
                        }}
                        required={true}
                        rules={[{ required: true, message: '请选择风险负责人' }]}
                        mode='multiple'
                        label='风险负责人'
                        name='riskSupervisors'
                    />
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='filterConditionKeys'
                        label='变更筛选项设置'
                        rules={[{ required: true, message: '请选择变更筛选项设置' }]}
                        style={{ width: 664 }}
                        tooltip='定义在可以圈定变更范围的选项'
                    >
                        <Cascader
                            style={{ width: '100%' }}
                            options={CHANGE_FILTER_OPTIONS}
                            multiple
                            maxTagCount='responsive'
                            placeholder='请选择'
                            showCheckedStrategy={SHOW_CHILD}
                        />
                    </Form.Item>
                </Row>
            </div>

            <div>
                <Row className={styles.row}>
                    <div className={styles.infoTitle}>提单入口</div>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='submissionPlatform'
                        label='变更发起平台'
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            options={changePlatformOption || []}
                        />
                    </Form.Item>
                    <Form.Item name='submissionUrl' label='提单链接' style={customStyle}>
                        <Input placeholder='请输入' className={styles.inputField} />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='ladingInterface'
                        label='提单接口'
                        style={{ width: 664 }}
                    >
                        <Radio.Group
                            options={[
                                { label: '从 Api 选择', value: 'oneapi' },
                                { label: '手动输入', value: 'handMovement' },
                            ]}
                            onChange={() => {
                                form.setFieldsValue({ api: undefined });
                            }}
                            optionType='button'
                        />
                    </Form.Item>
                </Row>

                <Form.Item
                    shouldUpdate={(prevValues, curValues) =>
                        prevValues.ladingInterface !== curValues.ladingInterface
                    }
                    noStyle
                >
                    {() => {
                        const FieldsValue = form?.getFieldsValue();
                        if (FieldsValue?.ladingInterface === 'oneapi') {
                            return (
                                <>
                                    <Row className={styles.row}>
                                        <Form.Item
                                            name='appNme'
                                            label='One API 所属应用'
                                            style={customStyle}
                                        >
                                            <Select
                                                style={{ minWidth: 180 }}
                                                placeholder='请选择'
                                                showSearch
                                                filterOption={false}
                                                options={labelValueResponsesOption || []}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name='branch'
                                            label='代码分支'
                                            style={customStyle}
                                        >
                                            <Select
                                                style={{ minWidth: 180 }}
                                                placeholder='请选择'
                                                showSearch
                                                filterOption
                                                fieldNames={{
                                                    label: 'tag',
                                                    value: 'tag',
                                                }}
                                                options={tagsOptions || []}
                                            />
                                        </Form.Item>
                                    </Row>
                                    <Row className={styles.row}>
                                        <Form.Item name='api' label='API' style={{ width: 664 }}>
                                            <Select
                                                style={{ minWidth: 180, height: 60 }}
                                                placeholder='请选择'
                                                showSearch
                                                filterOption={true}
                                                options={appOptions || []}
                                            />
                                        </Form.Item>
                                    </Row>
                                </>
                            );
                        }
                        return null;
                    }}
                </Form.Item>
                <Form.Item
                    shouldUpdate={(prevValues, curValues) =>
                        prevValues.ladingInterface !== curValues.ladingInterface
                    }
                    noStyle
                >
                    {() => {
                        const FieldsValue = form?.getFieldsValue();
                        if (FieldsValue?.ladingInterface === 'handMovement') {
                            return (
                                <Row className={styles.row}>
                                    <Form.Item name='api' label='API' style={{ width: 664 }}>
                                        <Input.TextArea rows={4} placeholder='请输入' />
                                    </Form.Item>
                                </Row>
                            );
                        }
                        return null;
                    }}
                </Form.Item>
            </div>

            <div>
                <Row className={styles.row}>
                    <div className={styles.infoTitle}>执行流程</div>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='approvalPlatform'
                        label='审批平台'
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            options={changePlatformOption || []}
                        />
                    </Form.Item>
                    <Form.Item
                        name='approvalUrl'
                        label='审批流程 URL'
                        style={customStyle}
                    >
                        <Input placeholder='请输入' className={styles.inputField} />
                    </Form.Item>
                </Row>
                <Row className={styles.row}>
                    <Form.Item
                        name='executionPlatform'
                        label='执行平台'
                        style={customStyle}
                    >
                        <Select
                            style={{ minWidth: 180 }}
                            placeholder='请选择'
                            showSearch
                            filterOption={false}
                            options={changePlatformOption || []}
                        />
                    </Form.Item>
                    <Form.Item
                        name='executionUrl'
                        label='执行界面 URL'
                        style={customStyle}
                    >
                        <Input placeholder='请输入' className={styles.inputField} />
                    </Form.Item>
                </Row>
            </div>
            <Row className={styles.row}>
                <div style={{ width: 664 }}>
                    <SubmitButton
                        form={form}
                    >
                        提交表单信息
                    </SubmitButton>
                </div>
            </Row>
        </Form>
    );
};

export default ChangeTypeForm;
