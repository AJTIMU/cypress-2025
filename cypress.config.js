const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    watchForFileChanges: false,
    "reporter":"mochawesome",
    "reporterOptions":{
        "charts":true,
        "overwrite":false,
        "html":false,
        "json":true,
        "reportDir":"cypress/report/mochawesome-report"
    

    },

    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },

    
  },

  
});


