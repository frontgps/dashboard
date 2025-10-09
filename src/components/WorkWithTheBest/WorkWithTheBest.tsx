import styles from '@/components/WorkWithTheBest/WorkWithTheBest.module.scss';
import { RightOutlined } from '@ant-design/icons';
import { Button, Card, ConfigProvider, Typography } from 'antd';

export default function WorkWithTheBest() {
  return (
    <ConfigProvider direction="ltr">
      <Card className={styles.wrapper}>
        <div className={styles.title}>
          <Typography.Title level={5}>Work with the best</Typography.Title>
          <Typography.Paragraph>
            Wealth creation is an evolutionarily recent positive-sum game. It is all about who take
            the opportunity first.
          </Typography.Paragraph>
        </div>
        <Button type="link">
          Read More
          <RightOutlined />
        </Button>
      </Card>
    </ConfigProvider>
  );
}
