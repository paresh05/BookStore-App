const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function dashboard() {

  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("http://localhost:3000/bookstore");

  await driver.findElement(By.name("cartButton")).click();
}

dashboard();
