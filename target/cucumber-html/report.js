$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with Parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Rachit"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"abc@xyz.com\" and password \"Abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Positive Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Abc123"
      ]
    },
    {
      "cells": [
        "prq@wq.con",
        "Abc1234567"
      ]
    }
  ]
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"abc@xyz.com\" and password \"Abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"prq@wq.con\" and password \"Abc1234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.step({
  "name": "user should be getting the error message \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Abc123",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "prq@wq.com",
        "Abc1234567",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"abc@xyz.com\" and password \"Abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be getting the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_getting_the_error_message_something(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#msg_box\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ip-172-31-30-62\u0027, ip: \u0027172.31.30.62\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1113-aws\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /tmp/.com.google.Chrome.0jP7o9}, goog:chromeOptions: {debuggerAddress: localhost:35053}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f54d8ae07fe82feb72de6fe0b2d4c80e\n*** Element info: {Using\u003did, value\u003dmsg_box}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepdefs.LoginStepDefs.user_should_be_getting_the_error_message_something(LoginStepDefs.java:71)\n\tat ✽.user should be getting the error message \"The email or password you have entered is invalid.\"(file:src/test/java/features/Login.feature:33)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login Scenario with multiple User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"prq@wq.com\" and password \"Abc1234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be getting the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_getting_the_error_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with Cucumber DataTable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@DataTable"
    }
  ]
});
formatter.step({
  "name": "User enters correct credentials",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "UserName",
        "abc@xyz.com"
      ]
    },
    {
      "cells": [
        "Password",
        "Abc@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_credentials(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Buton",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});