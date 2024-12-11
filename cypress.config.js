const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
}
module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  env: {
      baseUrl: 'http://automationexercise.com'
  },
  e2e: {
    setupNodeEvents
  },
});
