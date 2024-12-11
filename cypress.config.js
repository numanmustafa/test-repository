	
	const { defineConfig } = require("cypress");
	const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
	const addCucumberPreprocessorPlugin = 
	  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
	const createEsbuildPlugin=
	  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
	
	module.exports = defineConfig({
	  e2e: {
	    async setupNodeEvents(on, config) {
	      const bundler = createBundler({
	        plugins: [createEsbuildPlugin(config)],
	      })
	      
	      on("file:preprocessor", bundler);
	      await addCucumberPreprocessorPlugin(on, config);
	      
	      return config;
	    },
	    viewportHeight: 1000,
	    viewportWidth: 1200,
	    specPattern: "cypress/e2e/features/*.feature",
	    baseURL: "https://app.iinstructor.io/auth/signIn",
	    chromeWebSecurity: false,
	    video: false,
	    
	"cypress-cucumber-preprocessor": {
	  "nonGlobalStepDefinitions": true,
	  "stepDefinitions": "cypress/e2e/step_definitions"
	},
	  },
});