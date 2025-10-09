import styles from '@/components/OrdersHistory/OrdersHistory.module.scss';
import { useState } from 'react';
import { Button, Timeline, Typography } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const timelineList = [
  {
    title: '$2,400 - Redesign store',
    time: '09 JUN 7:20 PM',
    color: '#52c41a',
  },
  {
    title: 'New order #3654323',
    time: '08 JUN 12:20 PM',
    color: '#52c41a',
  },
  {
    title: 'Company server payments',
    time: '04 JUN 3:10 PM',
    color: '#1890ff',
  },
  {
    title: 'New card added for order #4826321',
    time: '02 JUN 2:45 PM',
    color: '#1890ff',
  },
  {
    title: 'Unlock folders for development',
    time: '18 MAY 1:30 PM',
    color: '#bfbfbf',
  },
  {
    title: 'New order #46282344',
    time: '14 MAY 3:30 PM',
    color: '#bfbfbf',
  },
];

export default function OrdersHistory() {
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <div className={styles.wrapper}>
      <Title level={5}>Orders History</Title>
      <Paragraph className={styles.description}>
        this month <span className={styles.green}>20%</span>
      </Paragraph>

      <Timeline mode="right" pending="Recording..." reverse={reverse}>
        {timelineList.map((t, index) => (
          <Timeline.Item color={t.color} key={index}>
            <Title level={5} style={{ margin: 0, fontSize: '14px' }}>
              {t.title}
            </Title>
            <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>{t.time}</Text>
          </Timeline.Item>
        ))}
      </Timeline>

      <Button
        type="primary"
        className="width-100"
        style={{ width: '100%', marginTop: 16 }}
        onClick={handleClick}
      >
        <MenuUnfoldOutlined /> REVERSE
      </Button>
    </div>
  );
}
