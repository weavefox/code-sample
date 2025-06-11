import React  from 'react';
import { useState } from 'ahooks';
import { Badge, Card } from 'antd';
import { ProColumns, ProTable } from '@ant-design/pro-components';

export type HistoryFilterCondition = {
  planType?: string;
  date?: string;
};
export const List = () => {
  const [filterCondition, setFilterCondition] =
    useState<HistoryFilterCondition>({});

  const columns: ProColumns = [
    {
      dataIndex: 'title',
      title: '事件内容',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'level',
      title: '事件类型',
      width: 80,
      render: (_, record) => {
        const isPLevelEvnet = record?.level?.length;
        return (
          <span>
            {isPLevelEvnet ? (
              <Badge status='error' text={record?.level} />
            ) : (
              <Badge status='warning' text={'警告'} />
            )}
          </span>
        );
      },
    },
    {
      dataIndex: 'planType',
      title: '影响服务',
      width: 100,
      render: (val, record) => {
        const scenario =
          record?.isEmergency === 'fasle' ? '日常运维' : '紧急故障';
        return <span>{val + '-' + scenario}</span>;
      },
    },
    {
      dataIndex: 'affected',
      title: '影响用户数',
      width: 80,
    },
    {
      dataIndex: 'start',
      title: '发生时间',
      width: 150,
    },
    {
      dataIndex: 'end',
      title: '更新时间',
      width: 150,
    },
    {
      dataIndex: 'isDeleted',
      title: '状态',
      width: 101,
      render: (val: string) => {
        const isDeleted = val === 'false' ? true : false;
        return (
          <span>
            {isDeleted ? (
              <Badge status='processing' text={'进行中'} />
            ) : (
              <Badge status='success' text={'已关闭'} />
            )}
          </span>
        );
      },
    },
    {
      dataIndex: 'creator',
      title: '创建人',
      width: 101,
    },
    {
      dataIndex: 'updatedBy',
      title: '更新人',
      width: 101,
    },
  ];

  return (
    <Card >
      <ProTable
        columns={columns}
        search={false}
        params={[filterCondition.planType, filterCondition.date]}
        options={false}
        rowKey={'msgId'}
        scroll={{ x: 'max-content' }}
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: [5, 10, 20, 50],
          showSizeChanger: true,
        }}
      />
    </Card>
  );
};
