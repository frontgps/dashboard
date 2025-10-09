import ReactApexChart, { type Props as ChartProps } from 'react-apexcharts';
import { Typography, Card } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import styles from '@/components/ActiveUsers/ActiveUsers.module.scss';

interface ChartData {
  name: string;
  data: number[];
}

const Months: string[] = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

const Series: ChartData[] = [
  { name: 'Mobile Apps', data: [350, 90, 290, 210, 490, 240, 390, 210, 490] },
  { name: 'Web Sites', data: [20, 90, 30, 140, 290, 290, 340, 230, 400] },
];

const getChartOptions = (categories: string[]): ChartProps['options'] => {
  return {
    chart: {
      toolbar: { show: false },
    },
    colors: ['#018ffb', '#68da97'],
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: { colors: '#8c8c97', fontWeight: 900, fontSize: '14px' },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: '#8c8c97', fontWeight: 900, fontSize: '14px' },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: '#e0e0e0',
    },
    tooltip: {
      x: {
        show: true,
      },
    },
  };
};

export default function ActiveUsers() {
  const chartOptions = getChartOptions(Months)!;
  const chartSeries = Series;

  return (
    <Card className="c-ant-card-activeuser ">
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Typography.Title level={5} className={styles.chartTitle}>
            Active Users
          </Typography.Title>
          <Typography.Paragraph className={styles.comparisonText}>
            than last week <span className={styles.comparisonHighlight}>+30%</span>
          </Typography.Paragraph>
        </div>
        <div className={styles.legend}>
          <Typography.Text className={styles.traffic}>
            Traffic
            <MinusOutlined />
          </Typography.Text>
          <Typography.Text className={styles.sales}>
            Sales
            <MinusOutlined />
          </Typography.Text>
        </div>
      </div>

      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
        width={'100%'}
      />
    </Card>
  );
}
