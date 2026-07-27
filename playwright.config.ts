import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './specs',

  reporter: [
    ['html', { outputFolder: 'reports/playwright-report' }],
    ['allure-playwright']
    
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure',
  },

  projects: [


    {
      name: 'login',
      testMatch: 'login.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  {
    name: 'dynamic-sorting',
    testMatch:'dynamic-sorting.spec.ts',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },


  {
    name: 'checkout-e2e',
    testMatch: 'checkout-e2e.spec.ts',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },


  {
    name: 'checkout-negative',
    testMatch: 'checkout-negative.spec.ts',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },




],

});