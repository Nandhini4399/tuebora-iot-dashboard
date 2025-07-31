import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../src/components/devicegrid/Pagination';

test('pagination button click updates page', () => {
  const mockSetPage = jest.fn();
  render(
    <Pagination currentPage={2} totalPages={3} setCurrentPage={mockSetPage} />
  );

  fireEvent.click(screen.getByText(/Previous/i));
  expect(mockSetPage).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getByText(/Next/i));
  expect(mockSetPage).toHaveBeenCalledWith(3);
});
