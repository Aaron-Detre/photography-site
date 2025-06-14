import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gear from './Gear';

describe('<Gear />', () => {
  test('it should mount', () => {
    render(<Gear />);

    const gear = screen.getByTestId('Gear');

    expect(gear).toBeInTheDocument();
  });
});