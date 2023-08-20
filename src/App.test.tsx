import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders login component', async () => {
  render(<App />);
  
  await waitFor(() => {
    const loginElements = screen.getAllByText(/Login/i);
    expect(loginElements.length).toBe(2);
  });
});
