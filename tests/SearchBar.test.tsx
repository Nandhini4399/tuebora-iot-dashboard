import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/devicegrid/SearchBar';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translations/i18n';

test('calls handleFilter on input change', () => {
  const mockFilter = jest.fn();
  render(
    <I18nextProvider i18n={i18n}>
      <SearchBar handleFilter={mockFilter} />
    </I18nextProvider>
  );

  const input = screen.getByPlaceholderText(/Filter your devices here.../i);
  fireEvent.change(input, { target: { value: 'Sensor' } });
  expect(mockFilter).toHaveBeenCalledWith('Sensor');
});
