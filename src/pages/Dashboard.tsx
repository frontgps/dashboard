import {
  DollarCircleOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import KpiCard from '@/components/KpiCard/KpiCard';
import { Col, Row } from 'antd';
import SalesAnalytics from '@/components/SalesAnalytics/SalesAnalytics';
import ActiveUsers from '@/components/ActiveUsers/ActiveUsers';
import ProjectsList from '@/components/ProjectsList/ProjectsList';
import OrdersHistory from '@/components/OrdersHistory/OrdersHistory';
import BuiltByDevelopers from '@/components/BuiltByDevelopers/BuiltByDevelopers';
import WorkWithTheBest from '@/components/WorkWithTheBest/WorkWithTheBest';

const kpis = [
  {
    title: 'Today’s Sales',
    value: '$53,000',
    percentage: 30,
    icon: <DollarCircleOutlined />,
  },
  {
    title: 'Today’s Users',
    value: '3,200',
    percentage: 20,
    icon: <UserOutlined />,
  },
  {
    title: 'New Clients',
    value: '+1,200',
    percentage: -20,
    icon: <HeartOutlined />,
  },
  {
    title: 'New Orders',
    value: '$13,200',
    percentage: 10,
    icon: <ShoppingCartOutlined />,
  },
];

export default function Dashboard() {
  return (
    <div style={{ overflow: 'hidden', margin: '0 15px', direction: 'ltr' }}>
      <Row gutter={[16, 16]}>
        {kpis.map((kpi) => (
          <Col
            style={{
              boxShadow: ' 0 20px 27px rgb(0 0 0/5%)',
              borderRadius: '12px',
            }}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={kpi.title}
          >
            <KpiCard {...kpi} />
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: '30px' }} gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <SalesAnalytics />
        </Col>
        <Col xs={24} md={12} lg={16}>
          <ActiveUsers />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
        <Col xs={24} md={12} lg={18}>
          <ProjectsList />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <OrdersHistory />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
        <Col xs={24} md={12} lg={16}>
          <BuiltByDevelopers />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <WorkWithTheBest />
        </Col>
      </Row>
    </div>
  );
}
