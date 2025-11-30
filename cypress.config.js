const { defineConfig } = require('cypress');
require('dotenv').config(); // load .env file

module.exports = defineConfig({
  reporter: 'mochawesome', // set mochawesome as reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // folder where reports will be saved
    overwrite: false,            // do not overwrite previous reports
    html: true,                  // generate HTML report
    json: true,                  // generate JSON report
    timestamp: 'mmddyyyy_HHMMss' // optional: add timestamp to report filename
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      console.log('Loaded ENV:', config.env);

      // optional: merge mochawesome options dynamically
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
