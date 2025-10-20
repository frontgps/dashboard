import styles from './WorkWithTheBest.module.scss';
import { RightOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';

export default function WorkWithTheBest() {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.innerCard}>
        <Typography.Title className={styles.innerTitle} level={5}>
          Work with the best
        </Typography.Title>
        <Typography.Paragraph className={styles.innerTitle}>
          Wealth creation is an evolutionarily recent positive-sum game. It is all about who take
          the opportunity first.
        </Typography.Paragraph>
        <div className={styles.innerButton}>
          Read More
          <RightOutlined />
        </div>
      </div>
    </Card>
  );
}
