import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarButton from './SidebarButton';

describe('<SidebarButton />', () => {
  test('it should mount', () => {
    render(<SidebarButton />);

    const sidebarButton = screen.getByTestId('SidebarButton');

    expect(sidebarButton).toBeInTheDocument();
  });
});