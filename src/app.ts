import inquirer from 'inquirer';
// const inquirer = await import('inquirer');
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com/');

  inquirer
    .prompt(['Chose Genre'])
    .then((answers: any) => {
      // Use user feedback for... whatever!!
    })
    .catch((error: any) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
})();
