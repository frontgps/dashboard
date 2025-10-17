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
    onError: () => {
      message.error('Failed to create user');
    },
  });

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      mutate(values);
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
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Invalid email format' },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter password' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
