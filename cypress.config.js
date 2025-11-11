const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config(); // Load .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Map environment variables from .env to Cypress
      config.env.BASE_URL = process.env.CYPRESS_BASE_URL;
      config.env.USERNAME = process.env.CYPRESS_USERNAME;
      config.env.PASSWORD = process.env.CYPRESS_PASSWORD;
      return config;
    },
  },
});
