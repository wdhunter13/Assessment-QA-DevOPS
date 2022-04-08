
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button shows div choices', async () => {
    const title = await driver.findElement(By.id('choices'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to duo displays player-duo', async () => {
    const title = await driver.findElement(By.id('player-duo'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})