import React from 'react';
import styles from './StatusScale.module.scss';

type PayloadType = {
  count: number;
  status: string;
  deviceNames: string[];
};

type TooltipProps = {
  active?: boolean;
  payload?: { payload: PayloadType }[];
};

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const data = payload[0].payload;
    return (
      <div className={styles.tooltip}>
        <p><strong>{data.count} {data.status} Devices:</strong></p>
        {data.deviceNames.map((name, idx) => (
          <p key={idx} style={{ margin: 0 }}>{name}</p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
