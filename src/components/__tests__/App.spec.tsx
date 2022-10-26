import * as React from 'react';
import * as tLib from '@testing-library/react';
import App from '../app/App';

describe('App Suite', () => {
  it('App Truthy', () => {
    expect(App).toBeTruthy();
  });

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

  test('App Test Actual (Truthy check only)', async () => {
    const component = tLib.render(<App />);
    const texts = await component.findAllByText('Resume');
    expect(texts.length).toBeGreaterThan(0);
  });

  test('App: AppBar test resume button', async () => {
    const component = tLib.render(<App />);
    const resume = await component.findByRole('button', { name: 'Resume' });
    // ignore mocking for resume as it requires gql mocking
    expect(resume).toBeDefined();
  });
});
