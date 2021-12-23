const { By, Key, Builder } = require("selenium-webdriver");
require("dotenv").config();
require("chromedriver");
const user = require("./userDetails.json")

async function example() {

  var email = user.loginDetails.email;
  var password = user.loginDetails.password;

  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(process.env.REACT_APP_URL);

  await driver.findElement(By.name("email")).sendKeys(email, Key.RETURN);
  await driver.sleep(1000);
  await driver.findElement(By.name("password")).sendKeys(password, Key.RETURN);
  await driver.sleep(2000);
  await driver.findElement(By.id("cartButton")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("placeOrder")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("continue")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("checkout")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("dashboard")).click();
}

example();
