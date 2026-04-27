// Reusing Context Across Tests

import { test } from '@playwright/test';

test.describe('Shared context tests', () => { //use describe to make it in a single parent
    test.use({ //they will share the same context and cookies
        viewport: { width: 1280, height: 720 }, //manually define options here and it will be shared
        locale: 'en-US',
    });

    test('test 1', async ({ page }) => {
        await page.goto('https://app.vwo.com/#login');
    });

    test('test 2', async ({ page }) => {
        await page.goto('https://app.vwo.com/#login');
    });
});



