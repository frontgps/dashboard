import { useEffect } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser, type User } from '@/api/users';

interface EditUserModalProps {
  open: boolean;
  userData: User | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditUserModal({ open, userData, onClose, onSuccess }: EditUserModalProps) {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        username: userData.username,
        email: userData.email,
        password: '',
        description: userData.description,
      });
    } else {
      form.resetFields();
    }
  }, [userData, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<User>) => updateUser(userData!.id, data),
    onSuccess: () => {
      message.success('User updated successfully');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      onSuccess();
    },
    onError: () => message.error('Failed to update user'),
  });

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (!values.password) delete values.password;
        mutate(values);
      })
      .catch(() => {});
  };

  return (
    <Modal
      open={open}
      title="Edit User"
      onCancel={onClose}
      destroyOnClose
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" loading={isPending} onClick={handleSubmit}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter email' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input.Password placeholder="Leave empty to keep current password" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
