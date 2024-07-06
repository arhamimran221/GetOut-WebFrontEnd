import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { day: "Monday", monthDate: "JAN", events: 320, accumulation: 400 },
  { day: "Tuesday", monthDate: "FEB", events: 100, accumulation: 500 },
  { day: "Wednesday", monthDate: "MAR", events: 290, accumulation: 300 },
  { day: "Thusday", monthDate: "JUNE", events: 400, accumulation: 600 },
];

const FillChart = (props) => {
  function formatEarnings(value) {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return `${value}`;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="earn-money">{`events: ${formatEarnings(
            data.events
          )}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ transform: "scaleX(-1)" }}>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          {/* <Tooltip content={<CustomTooltip />} />  */}
          <Area
            type="monotone"
            dataKey="events"
            stroke={props.Fill}
            fill="url(#colorGradient)"
          />

          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={props.Fill} stopOpacity={0} />
              <stop offset="100%" stopColor={props.Fill} stopOpacity={1} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FillChart;
