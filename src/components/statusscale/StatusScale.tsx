
import React, { useState } from "react";
import styles from "./StatusScale.module.scss";
import { DeviceData } from "../../utils/DeviceData";

type StatusScaleBarProps = {
  devices: DeviceData[];
};

const StatusScaleBar: React.FC<StatusScaleBarProps> = ({ devices }) => {
  const total = devices.length;

  const grouped: Record<"Online" | "Offline" | "Error", DeviceData[]> = {
    Online: [],
    Offline: [],
    Error: [],
  };

  devices.forEach((d) => grouped[d.status as "Online" | "Offline" | "Error"].push(d));

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    label: string;
    count: number;
    names: string[];
    x: number;
  }>({ visible: false, label: "", count: 0, names: [], x: 0 });

  const handleMouseEnter = (
    status: "Online" | "Offline" | "Error",
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    setTooltip({
      visible: true,
      label: status,
      count: grouped[status].length,
      names: grouped[status].map((d) => d.deviceName),
      x: rect.left + rect.width / 2,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const getPercentage = (count: number) => `${(count / total) * 100}%`;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        {(["Online", "Offline", "Error"] as const).map((status) => (
          <div
            key={status}
            className={styles[status.toLowerCase()]}
            style={{ width: getPercentage(grouped[status].length) }}
            onMouseEnter={(e) => handleMouseEnter(status, e)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      {tooltip.visible && (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x }}
          role="tooltip"
        >
          <strong>{tooltip.count} {tooltip.label} Device{tooltip.count > 1 ? "s" : ""}</strong>
          <ul>
            {tooltip.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.legend}>
        <Legend color="#27ae60" label="Online" />
        <Legend color="#bdc3c7" label="Offline" />
        <Legend color="#e74c3c" label="Error" />
      </div>
    </div>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className={styles.legendItem}>
    <span className={styles.dot} style={{ backgroundColor: color }} />
    <span>{label}</span>
  </div>
);

export default StatusScaleBar;
