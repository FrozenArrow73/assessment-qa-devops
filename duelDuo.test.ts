
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//this is showing the wrong localhost. it is showing 3000 when it should show 4000
beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("See All Bots button shows up when page loads", async () => {
    const seeAllBtn = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllBtn.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button shows up when page loads", async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const displayed = await drawBtn.isDisplayed()
    expect(displayed).toBe(true)
})