package demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumIntro {

	public static void main(String[] args) {
		
		//Invoking browser
		//to run in chrome browser - we have ChromeDriver - the methods
		//inside this helps to run our code
		
		//create object of ChromeDriver class
		//but every browser has some differences , we can change the reference
		System.setProperty("webdriver.chrome.driver", "D://Learning//NodeJs//java-selenium//chromedriver_win32//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		/*
		System.setProperty("webdriver.gecko.driver", "D://Learning//NodeJs//java-selenium//geckodriver_win32//geckodriver.exe");
WebDriver driver = new FirefoxDriver();

System.setProperty("webdriver.edge.driver", "D://Learning//NodeJs//java-selenium//edgedriver_win32//edgedriver.exe");
WebDriver driver = new EdgeDriver();
		 */
		//to open an url
		driver.get("https://rahulshettyacademy.com");
		
		//to get Title
		System.out.println(driver.getTitle());
		
		//to validate we go to correct webpage - get current url
		System.out.println(driver.getCurrentUrl());
		
		//close browser
		driver.close();//only closes the current window
		
		//quit browser
		driver.quit();//this will closes all the browser windows
		//we use WebDriver Interface
		//Interface is a group of related methods with empty bodies
		//Its class responsibility to implement methods declared in interface
		//when class agreed to implement the interface they must need to provide
//		implementation/ bodies to all defined methods in interface
		
//		in simple terms interface enforces contract to class to follow
		
		//WebDriver is an interface which provides set of browser automation
		//methods with empty bodies(Abstract methods)
		//classes like chromedriver , firefox driver, microsoftedge driver , safaridriver
		//implement webdriver interface and provide thier own implementation
		//to webdriver methods
	}
}
