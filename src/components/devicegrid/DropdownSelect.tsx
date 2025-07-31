import React from "react";
import styles from "./DropdownSelect.module.scss";
import { sortOptions } from "../../utils/DeviceData";

interface DropdownSortProps {
  selected: string;
  handleSort: (value: string, type: string, label: string) => void;
}

const DropdownSelect: React.FC<DropdownSortProps> = ({ selected, handleSort }) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = sortOptions.find(opt => opt.value === e.target.value);
      if (selectedOption) {
        const [valueKey] = selectedOption.value.split("_");
        handleSort(valueKey, selectedOption.type, selectedOption.value);
      }
  };

  return (
    <div className={styles.dropdownSort}>
      <select
        id="sortDropdown"
        value={selected}
        onChange={handleChange}
        className={styles.dropdownSelect}
        aria-label="Sort Dropdown"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
