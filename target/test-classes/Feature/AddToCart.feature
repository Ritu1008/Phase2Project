@AddToCart
Feature: This feature will be used to test the Add to Cart functionality of Swag Labs application

  Background: 
    Given I have launched the application
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on Login button
    Then I should land on home page

  Scenario: Add the product to Cart
    When I click on the Product name as "Sauce Labs Backpack"
    And I click on the Add to cart Button
    And I click on Shopping cart link
    Then I verify the item on cart page

  Scenario: Add multiple products to the cart
    When I add the following products to the cart:
      | Sauce Labs Onesie |
    And I click on Shopping cart link
    Then the cart should contain the added products
      | Sauce Labs Onesie |
