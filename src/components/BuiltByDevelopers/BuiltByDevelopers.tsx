import styles from './BuiltByDevelopers.module.scss';
import { Button, Card, Col, ConfigProvider, Image, Row, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export default function BuiltByDevelopers() {
  return (
    <ConfigProvider direction="ltr">
      <Card className={`c-ant-card-body ${styles.builtByDevelopers}`}>
        <Row align="middle" gutter={[16, 16]}>
          <Col md={14}>
            <Typography.Text type="secondary">Built by developers</Typography.Text>
            <Typography.Title level={5}>Muse Dashboard for Ant Design</Typography.Title>
            <Typography.Paragraph type="secondary">
              From colors, cards, typography to complex elements, you will find the full
              documentation.
            </Typography.Paragraph>
            <Button type="link">
              Read More
              <RightOutlined />
            </Button>
          </Col>
          <Col md={10}>
            <Image src="images/info-card-1.jpg" width={'100%'} preview={false} />
          </Col>
        </Row>
      </Card>
    </ConfigProvider>
  );
}
