import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoSection from './PhotoSection';

describe('<PhotoSection />', () => {
  test('it should mount', () => {
    render(<PhotoSection />);

    const photoSection = screen.getByTestId('PhotoSection');

    expect(photoSection).toBeInTheDocument();
  });
});