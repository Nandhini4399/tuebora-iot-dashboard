import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Pagination.module.scss';

export type PaginationProps = {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage, totalPages }) => {
    const { t } = useTranslation();
  return (
    <div aria-label="Pagination Controls" className={styles.pagination}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        {t('previous')}
      </button>
      <button aria-current="page" aria-label={`Current page, Page ${currentPage}`}>
        {currentPage}
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        {t('next')}
      </button>
    </div>
  );
};

export default Pagination;
