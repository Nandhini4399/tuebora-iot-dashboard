import { render, screen, within } from '@testing-library/react';
import DeviceTable from '../src/components/devicegrid/DeviceTable';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translations/i18n';

const devices = [
  {
    deviceName: 'Sensor A',
    location: 'Lab',
    status: 'Online',
    lastSeen: '2023-05-01T10:00:00Z'
  }
];

test('renders table headers and device row correctly (desktop view)', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <DeviceTable devices={devices} />
    </I18nextProvider>
  );

  const table = screen.getByRole('table');
  const headers = within(table).getAllByRole('columnheader');
  expect(headers).toHaveLength(4);

  expect(within(headers[0]).getByText(/name/i)).toBeInTheDocument();
  expect(within(headers[1]).getByText(/location/i)).toBeInTheDocument();
  expect(within(headers[2]).getByText(/status/i)).toBeInTheDocument();
  expect(within(headers[3]).getByText(/date/i)).toBeInTheDocument();

  const row = within(table).getAllByRole('row')[1];
  expect(within(row).getByText('Sensor A')).toBeInTheDocument();
  expect(within(row).getByText('Lab')).toBeInTheDocument();
  expect(within(row).getByText('Online')).toBeInTheDocument();
  expect(within(row).getByText('1/5/2023')).toBeInTheDocument();
});
