const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      // Enable cypress-mochawesome-reporter plugin (handles auto-merge)
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
