# learningCypress
First steps with cypress https://www.cypress.io/

version of cypress used: 5.5.0
# How to run the code inside the repo

Install cypress in main root folder

```
npm install cypress
```

To execute cypress IDE to develop and run tests:

```
npx cypress open
```

To execute cypress IDE to develop and run a specific spec in headless mode:

```
npx cypress run --spec ./cypress/integration/examples/ea_site.spec.js
```