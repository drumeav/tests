const { defineConfig } = require(`cypress`);

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8000'
  },
  pageLoadTimeout: 60000

});



// {
//   "baseUrl" : "http://localhost:8000"
// }


// module.exports = {
//   ...(on, config) => {
//     // ref: https://docs.cypress.io/api/plugins/browser-launch-api.html#Usage
//     on("before:browser:launch", (browser = {}, args) => {
//       if (browser.name === "chrome") {
//         args.push("--disable-dev-shm-usage");
//         return args;
//       }
//
//       return args;
//     });
//     //}
//   },
//
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };
