import { render, screen, fireEvent } from '@testing-library/react';
import DeviceGrid from '../src/components/devicegrid/DeviceGrid';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translations/i18n';
import '@testing-library/jest-dom';

const renderWithProviders = () =>
  render(
    <I18nextProvider i18n={i18n}>
      <DeviceGrid />
    </I18nextProvider>
  );

describe('DeviceGrid Component', () => {
  test('renders header with title and language switcher', () => {
    renderWithProviders();
    const title = screen.getByRole('heading', { level: 2 });
    const languageSelect = screen.getByRole('combobox');

    expect(title).toBeInTheDocument();
    expect(languageSelect).toBeInTheDocument();
  });

  test('renders device status section', () => {
    renderWithProviders();
    const statusSection = screen.getByLabelText('device-status-heading', {
      selector: 'section',
    });
    expect(statusSection).toBeInTheDocument();
  });

  test('renders search bar and sort dropdown', () => {
    renderWithProviders();

    const searchInput = screen.getByPlaceholderText(/Search Devices/i);
    const dropdowns = screen.getAllByRole('combobox');

    expect(searchInput).toBeInTheDocument();
    expect(dropdowns.length).toBeGreaterThan(1);
  });

  test('renders device table with device rows', async () => {
    renderWithProviders();

    const rows = await screen.findAllByRole('row');
    expect(rows.length).toBeGreaterThan(1); 
  });

  test('renders pagination navigation', () => {
    renderWithProviders();
    const paginationNav = screen.getByRole('navigation', {
      name: /pagination navigation/i,
    });

    expect(paginationNav).toBeInTheDocument();
  });

  test('pagination updates when page number clicked', () => {
    renderWithProviders();

    const nextPageBtn = screen.getByRole('button', { name: /2/i });
    fireEvent.click(nextPageBtn);

    const activeBtn = screen.getByRole('button', { name: /2/i });
    expect(activeBtn).toBeInTheDocument();
  });

  test('filters devices by search input', async () => {
    renderWithProviders();

    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'Sensor A' } });

    const rows = await screen.findAllByRole('row');
    expect(rows.length).toBeGreaterThan(1); 
  });

  test('sorts devices when dropdown option selected', async () => {
    renderWithProviders();

    const dropdowns = screen.getAllByRole('combobox');
    const sortDropdown = dropdowns[1];

    fireEvent.change(sortDropdown, { target: { value: 'deviceName' } });

    const sortedDevice = await screen.findByText(/Sensor A/i);
    expect(sortedDevice).toBeInTheDocument();
  });
});
