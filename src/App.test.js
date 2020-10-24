import React from 'react';
import { render } from '@testing-library/react';
import App from './components/app/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('khairul iman');
  expect(linkElement).toBeInTheDocument();
});
