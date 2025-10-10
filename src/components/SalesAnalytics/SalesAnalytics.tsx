import ReactApexChart, { type Props as ChartProps } from 'react-apexcharts';
import { Card, Typography, Row, Col } from 'antd';
import styles from '@/components/SalesAnalytics/SalesAnalytics.module.scss';

const { Title, Paragraph } = Typography;

interface SalesData {
  month: string;
  sales: number;
}

const staticSalesData: SalesData[] = [
  { month: 'Jan', sales: 450 },
  { month: 'Feb', sales: 200 },
  { month: 'Mar', sales: 100 },
  { month: 'Apr', sales: 220 },
  { month: 'May', sales: 500 },
  { month: 'Jun', sales: 100 },
  { month: 'Jul', sales: 400 },
  { month: 'Aug', sales: 230 },
  { month: 'Sep', sales: 500 },
  { month: 'Oct', sales: 550 },
];

const items = [
  { Title: '82', user: 'Items' },
  { Title: '$772', user: 'Sales' },
  { Title: '2m', user: 'Clicks' },
  { Title: '3,6K', user: 'Users' },
];

const getChartOptions = (data: SalesData[]): ChartProps['options'] => {
  const months = data.map((item) => item.month);

  return {
    chart: {
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadiusApplication: 'end',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: months,
      labels: {
        show: true,
        style: {
          colors: '#FFFFFF',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: number) {
          return val.toFixed(0);
        },
        style: {
          colors: '#FFFFFF',
        },
      },
    },

    fill: {
      opacity: 0.9,
      type: 'solid',
      colors: ['#FFFFFF'],
    },
    grid: {
      show: true,
      strokeDashArray: 3,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '$ ' + val.toLocaleString('en-US') + ' thousand';
        },
      },
    },
  };
};

const getChartSeries = (data: SalesData[]): ChartProps['series'] => {
  const salesValues = data.map((item) => item.sales);
  return [
    {
      name: 'Sales',
      data: salesValues,
    },
  ];
};

export default function SalesAnalytics() {
  const chartOptions = getChartOptions(staticSalesData);
  const chartSeries = getChartSeries(staticSalesData);

  return (
    <Card className="c-ant-card-chart c-ant-typography ">
      <div className={`${styles.salesCard} c-ant-card-chart `}>
        <ReactApexChart
          className="bar-chart"
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={220}
        />
      </div>

      <div className={styles.chartDetails}>
        <Title level={5} className={styles.chartTitle}>
          Active Users
        </Title>
        <Paragraph className={styles.comparisonText}>
          than last week <span className={styles.comparisonHighlight}>+30%</span>
        </Paragraph>
        <Paragraph className={styles.descriptionText}>
          We have created multiple options for you to put together and customise into pixel perfect
          pages.
        </Paragraph>
        <Row gutter={[16, 16]}>
          {items.map((item, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className={styles.statItem}>
                <Title level={4}>{item.Title}</Title>
                <span className={styles.statLabel}>{item.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
}
