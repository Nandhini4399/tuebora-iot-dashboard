import React, { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

export type SearchBarProps = {
  handleFilter: (val: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleFilter(event.target.value);
  };

  return (
      <input
        type="search"
        id="search"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder={t('searchPlacholder')}
        aria-label="Filter devices by name, location or status"
      />
  );
};

export default SearchBar;
