import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import getUsers from '@/api/getUsers';

interface UserType {
  key: React.Key;
  name: string;
  username: string;
  email: string;
  description: string;
}

const columns: TableColumnsType<UserType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'User Name', dataIndex: 'username' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Description', dataIndex: 'description' },
];

export default function Tables() {
  const [data, setData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setData(users);
      setLoading(false);
    })();
  }, []);

  const onChange: TableProps<UserType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table<UserType>
      scroll={{ x: 800 }}
      columns={columns}
      dataSource={data}
      loading={loading}
      onChange={onChange}
    />
  );
}
