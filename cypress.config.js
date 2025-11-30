const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",  // JSON folder for merge
    reportFilename: "sauce-report",
    overwrite: false,
    html: false,  // Disable individual HTML files
    json: true
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
