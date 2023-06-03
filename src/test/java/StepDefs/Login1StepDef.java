package StepDefs;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Login1StepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(2000);

	}

	@When("I enter username as {string}")
	public void i_enter_username_as(String usernameVal) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement userName = driver.findElement(By.xpath("//input[@id='user-name']"));
		userName.sendKeys(usernameVal);
		Thread.sleep(2000);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String passwordVal) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement password = driver.findElement(By.xpath("//input[@id='password']"));
		password.sendKeys(passwordVal);
		Thread.sleep(2000);

	}

	@When("I click on Login button")
	public void i_click_on_Login_button() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginButton = driver.findElement(By.xpath("//input[@id='login-button']"));
		loginButton.click();
		Thread.sleep(2000);

	}

	@Then("I should land on home page")
	public void i_should_land_on_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		String homepageTitle = driver.getTitle();
		String expectedTitle = "Swag Labs";
		Assert.assertEquals(homepageTitle, expectedTitle);
		System.out.println("Login Succesfull");

	}
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String expectedError) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String actualError = error.getText();
		Assert.assertEquals(actualError, expectedError);


	}

}
