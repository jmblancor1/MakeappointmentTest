const {
  defineConfig
} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs');

async function setupNodeEvents(on, config) {
 await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

 return config;
}
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.{feature,features}",
    supportFile: 'cypress/support/e2e.js',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
  },
  
  chromeWebSecurity: false,
    env: {
      chromePrefs: {
        'credentials_enable_service': false,
        'profile.password_manager_enabled': false
      }
    },
    browser: 'chrome',
    userDataDir:'C:\Users\lordm\AppData\Local\Google\Chrome\User Data\Profile 1'
  

});