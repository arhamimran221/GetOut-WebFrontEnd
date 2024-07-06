import React from 'react';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { day: 'Monday', monthDate: 'Mar 01', earnings: 300,  },
  { day: 'Tuesday', monthDate: 'April 02', earnings: 250,  },
  { day: 'Wednesday', monthDate: 'May 03', earnings: 190,  },
  { day: 'Thusday', monthDate: 'June 04', earnings: 180,  },
  { day: 'Friday', monthDate: 'July 05', earnings: 678,  },
  { day: 'Saturday', monthDate: 'Aug 06', earnings: 870,  },
  { day: 'Sunday', monthDate: 'Sep 07', earnings: 650,  },
  { day: 'Monday', monthDate: 'Nov 08', earnings: 450,  },
  { day: 'Tuesday', monthDate: 'Dec 09', earnings:620,  },
];

const LineCharts = () => {

  
  function formatEarnings(value) {
    if (value >= 1000) {
      return `$${(value)}`;
    }
    return `$${value}`;
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className='month-day'>{`${data.day}, ${data.monthDate}`}</p>
          <p className='earn-money'>{`Revenue: ${formatEarnings(data.earnings)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width={'100%'} height={150} >
      <LineChart data={data}>
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="earnings" strokeWidth={6} stroke="#0E8A74" dot={false}  />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
