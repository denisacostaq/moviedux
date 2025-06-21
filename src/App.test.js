import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links for Home and Watch List', () => {
  // Render App wrapped in a router for routing context
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  const homeLink = screen.getByRole('link', { name: /home/i });
  const watchListLink = screen.getByRole('link', { name: /watch list/i });

  expect(homeLink).toBeInTheDocument();
  expect(watchListLink).toBeInTheDocument();
});
