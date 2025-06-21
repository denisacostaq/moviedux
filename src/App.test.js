import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links for Home and Watch List', () => {
  // Render App directly, since it has its own Router
  render(<App />); 
  
  const homeLink = screen.getByRole('link', { name: /home/i });
  const watchListLink = screen.getByRole('link', { name: /watch list/i });

  expect(homeLink).toBeInTheDocument();
  expect(watchListLink).toBeInTheDocument();
});