import { useState } from 'react';
import { Table, Typography, Space, Button, Popconfirm, message } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, deleteUser, type User } from '@/api/users';

const { Title } = Typography;

export default function users() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['users', page, pageSize],
    queryFn: () => getUsers(page, pageSize),
  });

  const { mutate: mutateDelete, isPending: deleting } = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      message.success('User deleted');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      message.error('Failed to delete user');
    },
  });

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 120 },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      render: (d: string) => new Date(d).toLocaleString(),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: User) => (
        <Space>
          <Popconfirm
            title="Delete user?"
            onConfirm={() => mutateDelete(record.id)}
            okButtonProps={{ loading: deleting }}
          >
            <Button danger size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Space style={{ marginBottom: 16, justifyContent: 'space-between', width: '100%' }}>
        <Title level={3} style={{ margin: 0 }}>
          Users
        </Title>
        <Button type="primary" onClick={() => refetch()} loading={isLoading}>
          Refresh
        </Button>
      </Space>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data?.items || []}
        rowKey="id"
        pagination={{
          current: page,
          pageSize,
          total: data?.totalItems,
          onChange: (p, ps) => {
            setPage(p);
            setPageSize(ps);
          },
          showSizeChanger: true,
        }}
        bordered
      />

      {isError && <p style={{ color: 'red' }}>Failed to load users.</p>}
    </div>
  );
}
