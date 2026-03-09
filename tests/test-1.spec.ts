import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('cell', { name: '31' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Hi');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await page.getByRole('heading', { name: 'Appointment Confirmation' }).click();
  await page.getByRole('link', { name: 'Go to Homepage' }).click();
});