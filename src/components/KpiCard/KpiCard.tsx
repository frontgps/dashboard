import style from '@/components/KpiCard/KpiCard.module.scss';
import { Card, Col, Row } from 'antd';

interface KpiCardProps {
  title: string;
  value: string;
  percentage: number;
  icon: React.ReactNode;
}

export default function KpiCard({ title, value, percentage, icon }: KpiCardProps) {
  return (
    <Card className="c-ant-card-body">
      <Row dir="ltr">
        <Col xs={18}>
          <span className={style.title}>{title}</span>
          <div>
            <span className={style.value}>{value}</span>
            <span
              className={`${style.percentage} ${percentage > 0 ? style.positive : style.negative}`}
            >
              {percentage > 0 ? '+' : ''}
              {percentage}%
            </span>
          </div>
        </Col>
        <Col xs={6} className={style.iconBox}>
          <span className={style.icon}>{icon}</span>
        </Col>
      </Row>
    </Card>
  );
}
