import { useState, useMemo } from 'react';
import { Table, Typography, Space, Button, Popconfirm, message, Input, Row, Col } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, deleteUser, type User } from '@/api/users';
import CreateUserModal from './create';

const { Title } = Typography;

export default function Users() {
  const queryClient = useQueryClient();

  // Pagination state
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filters state
  const [filters, setFilters] = useState({
    id: '',
    username: '',
    email: '',
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch users with filters
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['users', page, pageSize, filters],
    queryFn: () => getUsers(page, pageSize, filters),
    keepPreviousData: true,
  });

  // Delete mutation
  const { mutate: mutateDelete, isPending: deleting } = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      message.success('User deleted');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => message.error('Failed to delete user'),
  });

  const columns = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id', width: 120 },
      { title: 'Username', dataIndex: 'username', key: 'username' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
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
    ],
    [mutateDelete, deleting],
  );

  // Update filter and reset to first page
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <Space
        style={{
          marginBottom: 16,
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          Users
        </Title>
        <Space>
          <Button type="default" onClick={() => refetch()} loading={isLoading}>
            Refresh
          </Button>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            + Create User
          </Button>
        </Space>
      </Space>

      {/* Search Filters */}
      <Row gutter={12} style={{ marginBottom: 12 }}>
        <Col span={6}>
          <Input
            placeholder="Search by ID"
            value={filters.id}
            onChange={(e) => handleFilterChange('id', e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Input
            placeholder="Search by Username"
            value={filters.username}
            onChange={(e) => handleFilterChange('username', e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Input
            placeholder="Search by Email"
            value={filters.email}
            onChange={(e) => handleFilterChange('email', e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Button
            style={{ width: '100%' }}
            onClick={() => refetch()}
            type="primary"
            loading={isLoading}
          >
            Apply Filters
          </Button>
        </Col>
      </Row>

      {/* Table */}
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

      {/* Create Modal */}
      <CreateUserModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ['users'] });
        }}
      />
    </div>
  );
}
