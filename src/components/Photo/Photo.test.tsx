import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Photo from './Photo';

describe('<Photo />', () => {
  test('it should mount', () => {
    render(<Photo />);

    const photo = screen.getByTestId('Photo');

    expect(photo).toBeInTheDocument();
  });
});