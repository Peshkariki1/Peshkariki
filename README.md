## Framework Description: Cypress + JavaScript + Mocha + Chai E2E Testing for Peshkariki Courier Service

### Overview
The `Cypress` framework, along with `JavaScript`, `Mocha`, and `Chai`, provides a robust end-to-end (E2E) testing solution specifically tailored for the Peshkariki courier service. This framework allows small and medium-sized businesses to address their delivery challenges by ensuring the reliability and quality of all stages of cargo transportation. With Cypress, JavaScript, Mocha, and Chai, Peshkariki's owners can focus on business development, knowing that their courier service is thoroughly tested and meets their customers' expectations.
﻿# OpenWeather_05

[https://alt10.peshkariki.ru/](https://alt10.peshkariki.ru/)

**How to start working in our project?**

1. Clone repository to your machine.

2. Navigate to project root folder.

3. Run command ```npm ci``` in terminal VScode.
   
4. Create new branch

5. After, execute ```npx cypress open```  to run tests.
   
6. For running tests with reports use ```npx cypress run --headed --browser chrome```

**Project Coding Convention**

Naming conventions:
We shall use Camelcase for naming conventions: ```camelCase```

**Spec structure:**

- Each block ```describe``` should contain name of group
- Each test (```it```) should contain name of test case (```AT```) 
example:

describe('Create Order', () => {

    it('AT_001.001 | should display create order container', function () {
        ...
    })

    it('AT_002.001 |  Check the maximum allowed input value for the userPhone field should not exceed 256 characters', function () {
        ...
    })
})

**Attention!**

1. Not allowed to install any libraries, plugins, etc. to avoid changing configuration files.
2. The cypress.env.json is created automatically when the ci/cd is started

**!!Do not push changed files as:**

```package.json```
```package.lock.json```
```ci.yml```
```cancel.yml```
```cypress.config.js```
```e2e.js```
```cypress.env.json```

### Key Features
- **End-to-End Testing**: The framework enables comprehensive testing of the Peshkariki courier service, covering the entire application flow from order creation to delivery tracking.
- **Automation**: Cypress and JavaScript provide powerful automation capabilities, allowing businesses to automate repetitive tasks such as order placement, form filling, status updates, and delivery details verification.
- **Mocha Test Framework**: Mocha provides a flexible and powerful test framework, enabling businesses to write clear and structured tests in a style that suits their preferences, whether it's BDD or TDD.
- **Chai Assertion Library**: Chai offers a wide range of assertion styles and expressive syntax, empowering businesses to write concise and readable assertions to validate the expected behavior of the courier service.
- **Fast and Reliable Testing**: Cypress offers fast and reliable test execution with real-time reloading, automatic waiting for network requests, and built-in debugging capabilities, ensuring efficient testing of the Peshkariki courier service.
- **Cross-Browser Testing**: Cypress supports running tests across multiple browsers, allowing businesses to verify the compatibility and consistent behavior of the courier service on different platforms.

