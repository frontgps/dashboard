import {
  Card,
  Typography,
  Space,
  Table,
  Tooltip,
  ConfigProvider,
  Progress,
  Button,
  Upload,
} from 'antd';
import Radio, { Group } from 'antd/es/radio';
import styles from '@/components/ProjectsList/ProjectsList.module.scss';
import { useState } from 'react';
import type { RadioChangeEvent, TableProps } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface TeamMember {
  name: string;
  img: string;
}

interface ProjectItem {
  key: string;
  img: string;
  title: string;
  members: TeamMember[];
  budget: string;
  progress: number;
  status: 'active' | 'success' | 'exception' | 'normal';
  budText: string;
}

const projectsList: ProjectItem[] = [
  {
    key: '1',
    img: 'logo-shopify.svg',
    title: 'Soft UI Shopify Version',
    budget: '$14,000',
    budText: '$14,000',
    progress: 60,
    status: 'active',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-2.jpg' },
      { name: 'Alexander Smith', img: 'team-3.jpg' },
      { name: 'Jessica Doe', img: 'team-4.jpg' },
    ],
  },
  {
    key: '2',
    img: 'logo-atlassian.svg',
    title: 'Progress Track',
    budget: '$3,000',
    budText: '$3,000',
    progress: 10,
    status: 'normal',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-2.jpg' },
    ],
  },
  {
    key: '3',
    img: 'logo-slack.svg',
    title: 'Fix Platform Errors',
    budget: 'Not Set',
    budText: 'Not Set',
    progress: 100,
    status: 'success',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-1.jpg' },
      { name: 'Alexander Smith', img: 'team-3.jpg' },
    ],
  },
  {
    key: '4',
    img: 'logo-spotify.svg',
    title: 'Launch new Mobile App',
    budget: '$20,600',
    budText: '$20,600',
    progress: 100,
    status: 'success',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-2.jpg' },
    ],
  },
  {
    key: '5',
    img: 'logo-jira.svg',
    title: 'Add the New Landing Page',
    budget: '$4,000',
    budText: '$4,000',
    progress: 80,
    status: 'active',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-2.jpg' },
      { name: 'Alexander Smith', img: 'team-3.jpg' },
      { name: 'Jessica Doe', img: 'team-4.jpg' },
    ],
  },
  {
    key: '6',
    img: 'logo-invision.svg',
    title: 'Redesign Online Store',
    budget: '$2,000',
    budText: '$2,000',
    progress: 100,
    status: 'exception',
    members: [
      { name: 'Ryan Tompson', img: 'team-1.jpg' },
      { name: 'Romina Hadid', img: 'team-2.jpg' },
    ],
  },
];

const columns: TableProps<ProjectItem>['columns'] = [
  {
    title: 'COMPANIES',
    dataIndex: 'title',
    key: 'title',
    render: (text: string, record) => (
      <Space size="middle">
        <img src={`/images/${record.img}`} alt={text} style={{ width: 24, height: 24 }} />
        <Typography.Text strong>{text}</Typography.Text>
      </Space>
    ),
  },
  {
    title: 'MEMBERS',
    dataIndex: 'members',
    key: 'members',
    render: (members: TeamMember[]) => (
      <Space style={{ gap: 0 }}>
        {members.map((member, index) => (
          <Tooltip placement="bottom" title={member.name} key={index}>
            <img
              className={styles.memberAvatar}
              src={`/images/${member.img}`}
              alt={member.name}
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '1px solid #fff',
                marginLeft: index > 0 ? -8 : 0,
                position: 'relative',
                zIndex: members.length - index,
              }}
            />
          </Tooltip>
        ))}
      </Space>
    ),
  },
  {
    title: 'BUDGET',
    dataIndex: 'budText',
    key: 'budget',
    render: (text: string) => (
      <Typography.Text className="text-xs font-weight-bold">{text}</Typography.Text>
    ),
  },
  {
    title: 'COMPLETION',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress: number, record) => (
      <Progress
        percent={progress}
        size="small"
        status={record.status}
        format={record.status === 'exception' ? () => 'Cancel' : undefined}
      />
    ),
  },
];

export default function ProjectsList() {
  const [selectedValue, setSelectedValue] = useState('a');

  const onChange = (e: RadioChangeEvent) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Card className={'c-ant-card-project'}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Title level={5}>Projects</Title>
          <Paragraph className={styles.lastweek}>
            done this month<span className={styles.blue}>40%</span>
          </Paragraph>
        </div>
        <div>
          <Group onChange={onChange} value={selectedValue} className={`${styles.navItem}`}>
            <Radio.Button value="a">ALL</Radio.Button>
            <Radio.Button value="b">ONLINE</Radio.Button>
            <Radio.Button value="c">STORES</Radio.Button>
          </Group>
        </div>
      </div>
      <ConfigProvider direction="ltr">
        <Table<ProjectItem>
          columns={columns}
          dataSource={projectsList}
          scroll={{ x: 650 }}
          pagination={false}
        />
      </ConfigProvider>
      <Upload style={{ width: '100%', marginTop: '10px', padding: '12px' }}>
        <Button type="dashed" style={{ width: '100%', height: '40px' }}>
          <span className="click">Click to Upload</span>
          <ToTopOutlined />
        </Button>
      </Upload>
    </Card>
  );
}
