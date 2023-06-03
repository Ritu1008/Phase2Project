package StepDefs;
import java.util.List;
import java.util.Map;
import org.openqa.selenium.NoSuchElementException;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDef {
	
	WebDriver driver = Hooks.driver;
	List<String> addedProducts;
	
	@When("I click on the Product name as {string}")
	public void i_click_on_the_Product_name_as(String string) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement productName = driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']"));
		productName.click();
		Thread.sleep(2000);
	}

	@When("I click on the Add to cart Button")
	public void i_click_on_the_Add_to_cart_Button() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement addToCartButton = driver.findElement(By.xpath("//button[text()='Add to cart']"));
		addToCartButton.click();
		Thread.sleep(2000);
	}

	@When("I click on Shopping cart link")
	public void i_click_on_Shopping_cart_link() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement shoppingCartLink = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		shoppingCartLink.click();
		Thread.sleep(2000);
	}

	@Then("I verify the item on cart page")
	public void i_verify_the_item_on_cart_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement productTitleOnCartPage = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		String actualProductName = productTitleOnCartPage.getText();
		Thread.sleep(2000);
		String expectedProductName = "Sauce Labs Backpack";
		Assert.assertEquals(actualProductName, expectedProductName);
	}

	@When("I add the following products to the cart:")
	public void i_add_the_following_products_to_the_cart(io.cucumber.datatable.DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
		List<Map<String, String>> productList = dataTable.asMaps(String.class, String.class);

		for (Map<String, String> product : productList) {
			String productName = product.get("product");
			// Find the add to cart button for each product and click it
			WebElement addToCartButton = driver.findElement(
					By.xpath("//div[text()='" + productName + "']/ancestor::div[@class='inventory_item']//button"));
			addToCartButton.click();
		}
	}

	@Then("the cart should contain the added products")
	public void the_cart_should_contain_the_added_products(io.cucumber.datatable.DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
		List<Map<String, String>> productList = dataTable.asMaps(String.class, String.class);

		for (Map<String, String> product : productList) {
			String productName = product.get("product");
			try {
				WebElement addedProduct = driver
						.findElement(By.xpath("//div[@class='inventory_item_name' and text()='" + productName + "']"));
				Assert.assertTrue("Product " + productName + " is not displayed in the cart.",
						addedProduct.isDisplayed());
			} catch (NoSuchElementException e) {
				Assert.fail("Product " + productName + " is not found in the cart.");
			}
		}
	}


}
