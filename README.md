# Automation Test

Playwright end-to-end test for a contact form.

## What it does

Fills out the contact form on the target site, takes a screenshot before submitting, clicks "Request a call back", and verifies the user lands on the thank-you page.

## Setup

```bash
npm install
```

## Running the tests

```bash
npx playwright test
```

## Project structure

- `tests/contact-form.spec.js` - the contact form test
- `playwright.config.js` - Playwright configuration (base URL, browser projects)
- `screenshots/` - screenshots captured during test runs (git-ignored)
