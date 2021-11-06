import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../app/App';

describe('App Suite', () => {
  it('App Truthy', () => {
    expect(App).toBeTruthy();
  });

  test('App Rendering', () => {
    const component = renderer.create(App());
    let tree = component.toJSON();
    expect(tree).toBeInstanceOf(Object);
  });
});

test('Standalone Jest Sanity Check', () => {
  expect(1).toBe(1);
});
