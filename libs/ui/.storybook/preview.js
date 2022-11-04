import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './tailwind-base-imports.css';

if (module.hot) {
  module.hot.accept();
}

const CUSTOM_VIEWPORTS = {
  laptop1920x1080: {
    name: 'Laptop - 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  },
  laptop1440x990: {
    name: 'Laptop - 1440x990',
    styles: {
      width: '1440px',
      height: '990px'
    }
  },
  laptop1366x768: {
    name: 'Laptop - 1366x768',
    styles: {
      width: '1366px',
      height: '768px'
    }
  },
  laptop1280x720: {
    name: 'Laptop - 1280x720',
    styles: {
      width: '1280px',
      height: '720px'
    }
  },
  laptop1024x768: {
    name: 'Laptop - 1024x768',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  ...INITIAL_VIEWPORTS
};

export const parameters = {
  viewport: {
    viewports: CUSTOM_VIEWPORTS,
  },
};
