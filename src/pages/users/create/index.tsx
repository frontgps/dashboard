import { Modal, Form, Input, Button, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '@/api/users';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateUserModal({ open, onClose, onSuccess }: CreateUserModalProps) {
  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      message.success('User created successfully');
      form.resetFields();
      onSuccess();
    },
    onError: (error: any) => {
      console.error('Create user error:', error);
      message.error('Failed to create user');
      const serverMessage =
        error?.response?.data?.message ||
        (error?.response?.data?.data && JSON.stringify(error.response.data.data)) ||
        'Failed to create user';
      message.error(serverMessage);
    },
  });

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload = { ...values, emailVisibility: true };

      mutate(payload);
    } catch {
      // validation failed
    }
  };

  return (
    <Modal
      title="Create New User"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={isPending} onClick={handleSubmit}>
          Create
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input placeholder="Enter username" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Invalid email format' },
          ]}
        >
          <Input placeholder="Enter email" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter password' },
            { min: 8, message: 'Password must be at least 8 characters' },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Password must contain letters and numbers',
            },
          ]}
        >
          <Input.Password placeholder="Enter password" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
          name="passwordConfirm"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: false, message: 'Please enter description' }]}
        >
          <Input.TextArea placeholder="Optional description..." rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
