import { type FC } from 'react';
import type { DeviceData } from '../../utils/DeviceData';
import { useTranslation } from 'react-i18next';
import styles from './DeviceTable.module.scss';

export type DeviceTableProps = {
  devices: DeviceData[];
};

export const dateFormatter = (date: string) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const DeviceTable: FC<DeviceTableProps> = ({ devices }) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.deviceTableWrapper}
      role="region"
      aria-labelledby="device-table-heading"
    >
      <h4 id="device-table-heading" className="sr-only">
        Device Table
      </h4>

      {/* Desktop View (Table) */}
      <div className={styles.desktopView}>
        <table role="table">
          <thead>
            <tr>
              <th>{t('name')}</th>
              <th>{t('location')}</th>
              <th>{t('status')}</th>
              <th>{t('date')}</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index}>
                <td>{device.deviceName}</td>
                <td>{device.location}</td>
                <td>{device.status}</td>
                <td>{dateFormatter(device.lastSeen)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className={styles.mobileView}>
        {devices.map((device, index) => (
          <div className={styles.deviceCard} key={index}>
            <p>
              <strong>{t('name')}:</strong> {device.deviceName}
            </p>
            <p>
              <strong>{t('location')}:</strong> {device.location}
            </p>
            <p>
              <strong>{t('status')}:</strong> {device.status}
            </p>
            <p>
              <strong>{t('date')}:</strong> {dateFormatter(device.lastSeen)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceTable;
