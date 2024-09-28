Launch URL: https://www.saucedemo.com/

UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".

UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".

UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.

Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
Please, add task description as README.md into your solution!

To perform the task use the various of additional options:
Test Automation tool: WebDriverIO;
Browsers: 1) Chrome; 2) Edge;
Locators: XPath;
Patterns: Page Object;
Assertions: Use from the selected framework;
[Optional] Loggers: Use from the selected framework.


# Testing Automation Framework

This repository contains an automated testing framework built using [WebdriverIO](https://webdriver.io/), designed for testing [web applications](https://www.saucedemo.com/). The framework supports writing and executing functional and UI tests for Chrome and MicrosoftEdge platforms.

## Features

- **WebdriverIO**: Core framework for handling browser automation.
- **Cross-browser testing**: Supports Chrome and Edge.
- **Page Object Model (POM)**: Organizes tests and page interactions for better maintainability.
- **Test Runner**: Using WebdriverIO’s integrated test runner.
- **Assertions**: Built-in assertions using `Chai`.
- **Reporting**: Integrated with Allure for rich test reports.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed (v14 or later).
- **Browser drivers**: Install necessary browser drivers for Chrome, Firefox, etc.
- **Allure CLI**: For generating test reports (`npm install -g allure-commandline`).

## Getting Started

### 1. Clone the repository
```
git clone {https://github.com/FcoMondro/EPAMFinalTask/}
cd EPAMFinalTask
```
### 2. Install Dependencies
```
npm install
npm install -g allure-commandline
```
### 3. Run Tests

You can run all tests using the WebdriverIO test runner:
```
npm run test
```
To run specific test suites or files, use:
```
npx wdio run ./wdio.conf.js --spec ./test/specs/<spec-file>.js
```

### 4. Wiew Test Reports

After running the tests, generate and open the Allure report:
```
allure generate allure-results --clean
allure open
```

## Framework Structure 
```
├── allure-results/        # Raw data for Allure reports (auto-generated)
├── allure-report/         # Generated Allure report (auto-generated)
src                        # TAF Source files
├───config
│   └── wdio.conf.js       # WebdriverIO configuration files
├───po                     # Page object model classes
│   ├───components
│   │   └───common
│   └───pages
├───tests                  # Test scripts
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```