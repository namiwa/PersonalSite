import * as React from 'react';
import * as tLib from '@testing-library/react';

describe('App Suite', () => {
  test('Div Test Rendering', () => {
    const component = tLib.render(<div />);
    expect(component).toBeTruthy();
  });

  test('Standalone Jest Sanity Check', () => {
    expect(1).toBe(1);
  });

  // https://www.gatsbyjs.com/docs/how-to/testing/testing-react-components/
  const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;

  test('App Rendering Sanity Check', () => {
    const { getByTestId } = tLib.render(<Title />);
    expect(getByTestId('hero-title').getAttribute('data-testid')).toBe(
      'hero-title',
    );
  });
});
