import { useEffect, useMemo, useState } from 'react';
import StatusScale from '../statusscale/StatusScale';
import {
  iotDevices,
  ITEMS_PER_PAGE,
  type DeviceData,
} from '../../utils/DeviceData';
import SearchBar from './SearchBar';
import DeviceTable from './DeviceTable';
import Pagination from './Pagination';
import { filterDevices, sortDevice } from '../../utils/DeviceUtils';
import styles from './DeviceGrid.module.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import DropdownSelect from './DropdownSelect';

const DeviceGrid = () => {
  const [filteredDevices, setFilteredDevices] = useState<DeviceData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortValue, setSortValue] = useState('');

  const { t } = useTranslation();

  const devices = iotDevices;

  useEffect(() => {
    setFilteredDevices(sortDevice(iotDevices, 'deviceName', 'asc'));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredDevices]);

  const paginatedDevices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredDevices.slice(startIndex, endIndex);
  }, [currentPage, filteredDevices]);

  const handleFilter = (value: string) => {
    setFilteredDevices(value === '' ? devices : filterDevices(devices, value));
  };

  const handleSort = (key: string, type: string, value: string) => {
    console.log(value);
    const sortedDevices = sortDevice(filteredDevices, key, type);
    setSortValue(value);
    setFilteredDevices(sortedDevices);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.deviceGrid}>
      <header className={styles.header}>
        <h2>{t('title')}</h2>
        <LanguageSwitcher />
      </header>

      <section aria-labelledby="device-status-heading">
        <StatusScale devices={devices} />
      </section>

      <main className={styles.mainContent}>
        <div className={styles.filterSortContainer}>
          <SearchBar handleFilter={handleFilter} />
          <DropdownSelect selected={sortValue} handleSort={handleSort} />
        </div>
        <DeviceTable devices={paginatedDevices} />
      </main>

      <nav role="navigation" aria-label="Pagination Navigation">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePagination}
          totalPages={Math.ceil(filteredDevices.length / ITEMS_PER_PAGE)}
        />
      </nav>
    </div>
  );
};

export default DeviceGrid;
