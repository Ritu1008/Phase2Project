package StepDefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
		
		monochrome=true, 
		plugin = { "pretty","html:target/html-cucumber","json:target/cucumber.json"},
		features = "src/test/java/Feature", 
		glue = "StepDefs",
		//tags = {"@Sanity"}
		//tags = {"@Regression"}
		tags = {"@Login or @AddToCart" }
		
		)

public class RunnerClass {

	

}
