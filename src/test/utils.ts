import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui: any, options: any) => {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
};

export default customRender;
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
