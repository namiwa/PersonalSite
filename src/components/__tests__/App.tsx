import * as React from 'react';
import * as renderer from '@testing-library/react';
import App from '../app/App';

describe('App Suite', () => {
  it('App Truthy', () => {
    expect(App).toBeTruthy();
  });

  test('Div Test Rendering', () => {
    const component = renderer.render(<div />);
    expect(component).toBeTruthy();
  });

  test('Standalone Jest Sanity Check', () => {
    expect(1).toBe(1);
  });

  // https://www.gatsbyjs.com/docs/how-to/testing/testing-react-components/
  const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;

  test('App Rendering Sanity Check', () => {
    const { getByTestId } = renderer.render(<Title />);
    expect(getByTestId('hero-title').getAttribute('data-testid')).toBe(
      'hero-title',
    );
  });

  test('App Test Actual (Truthy check only)', () => {
    const component = renderer.render(<App />);
    expect(component).toBeTruthy();
  });
});
