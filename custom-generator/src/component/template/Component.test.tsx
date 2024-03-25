import { render } from '@testing-library/react';
import Component from '.';

describe('Component', () => {
  it('should render', () => {
    const { asFragment } = render(<Component />);

    expect(asFragment()).toMatchSnapshot();
  });
});
