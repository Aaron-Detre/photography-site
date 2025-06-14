import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from './AboutMe';

describe('<AboutMe />', () => {
  test('it should mount', () => {
    render(<AboutMe />);

    const aboutMe = screen.getByTestId('AboutMe');

    expect(aboutMe).toBeInTheDocument();
  });
});