const { By, Key, Builder } = require("selenium-webdriver");
require("dotenv").config();
require("chromedriver");
const user = require("./userDetails.json")

async function register() {
  let firstName = user.registrationDetails.firstName;
  let lastName = user.registrationDetails.lastName;
  let email = user.registrationDetails.email;
  let password = user.registrationDetails.password;
  let confirmPassword = user.registrationDetails.confirmPassword;

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get(process.env.REACT_APP_REGISTRATION_URL);

  //To send a search query by passing the value in searchString.
  //registeration page
  await driver.findElement(By.name("firstName")).sendKeys(firstName);
  await driver.findElement(By.name("lastName")).sendKeys(lastName);
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.findElement(By.name("password")).sendKeys(password);
  await driver.findElement(By.name("confirmPassword")).sendKeys(confirmPassword);
  await driver.sleep(1000)
  await driver.findElement(By.id("submit")).click();
  await driver.alert().accept();
}

register();