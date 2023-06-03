$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to test the Add to Cart functionality of Swag Labs application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add the product to Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "name": "I click on the Product name as \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_click_on_the_Product_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add to cart Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_click_on_the_Add_to_cart_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_click_on_Shopping_cart_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the item on cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_verify_the_item_on_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple products to the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "name": "I add the following products to the cart:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_add_the_following_products_to_the_cart(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.i_click_on_Shopping_cart_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the cart should contain the added products",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.AddToCartStepDef.the_cart_should_contain_the_added_products(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Feature/Login1.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Swag Labs application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login success scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "xyz@12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"xyz@12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});