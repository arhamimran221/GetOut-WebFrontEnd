import React from 'react';
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
    { day: 'Monday', monthDate: 'JAN', earnings: 5000, accumulation: 5000 },
    { day: 'Tuesday', monthDate: 'FEB', earnings: 2500, accumulation: 1500 },
    { day: 'Wednesday', monthDate: 'MAR', earnings: 1290, accumulation: 3500 },
    { day: 'Thusday', monthDate: 'JUNE', earnings: 1870, accumulation: 6500 },
    { day: 'Friday', monthDate: 'JULY', earnings: 6780, accumulation: 8500 },
    { day: 'Saturday', monthDate: 'AUG', earnings: 9870, accumulation: 7100 },
];

const RevenueChart = () => {
  function formatEarnings(value) {
    if (value >= 1000) {
      return `${(value)}M`;
    }
    return `${value}M`;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className='month-day'>{`${data.day}, ${data.monthDate}`}</p>
          <p className='earn-money'>{`Revenue: ${formatEarnings(data.earnings)}`}</p>
          <p className='earn-money'>{`Accumulation: ${formatEarnings(data.accumulation)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width={'100%'} height={350} >
      <BarChart data={data} >
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey="monthDate" />
        <YAxis />
        <Bar
          dataKey="earnings"
          fill="#394CFF"
          barSize={40}
          radius={[6, 6, 6, 6]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
