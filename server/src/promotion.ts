import { chromium, Page } from 'playwright';

interface FormField {
  name: string;
  type: string;
  selector: string;
}

export async function submitForm(url: string, data: Record<string, string>) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Visiting ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // 1. Find the contact page if we are on the homepage
    if (!url.toLowerCase().includes('contact')) {
      const contactLink = await page.$('a:has-text("contact"), a:has-text("\u043a\u043e\u043d\u0442\u0430\u043a\u0442"), a:has-text("\u0437\u0432\u2019\u044f\u0437\u043e\u043a")');
      if (contactLink) {
        console.log('Found contact link, navigating...');
        await contactLink.click();
        await page.waitForLoadState('networkidle');
      }
    }

    // 2. Identify form fields
    const forms = await page.$$('form');
    if (forms.length === 0) {
      throw new Error('No forms found on the page');
    }

    // Pick the most likely contact form (heuristic: has most inputs or textarea)
    let bestForm = forms[0];
    let maxInputs = 0;
    for (const form of forms) {
      const inputs = await form.$$('input, textarea');
      if (inputs.length > maxInputs) {
        maxInputs = inputs.length;
        bestForm = form;
      }
    }

    console.log('Filling form...');
    const inputs = await bestForm.$$('input, textarea, select');
    
    for (const input of inputs) {
      const type = await input.getAttribute('type');
      const name = (await input.getAttribute('name') || '').toLowerCase();
      const id = (await input.getAttribute('id') || '').toLowerCase();
      const placeholder = (await input.getAttribute('placeholder') || '').toLowerCase();
      const label = await page.evaluate(el => {
        const id = el.id;
        if (id) {
          const l = document.querySelector(`label[for="${id}"]`);
          return l ? l.textContent?.toLowerCase() : '';
        }
        return '';
      }, input);

      const fieldInfo = `${name} ${id} ${placeholder} ${label}`;

      if (fieldInfo.includes('name') || fieldInfo.includes('\u0456\u043c\u2019\u044f') || fieldInfo.includes('\u0438\u043c\u044f')) {
        await input.fill(data.name || 'Anonymous');
      } else if (fieldInfo.includes('email') || fieldInfo.includes('\u043f\u043e\u0448\u0442\u0430') || fieldInfo.includes('\u043f\u043e\u0447\u0442\u0430')) {
        await input.fill(data.email || 'test@example.com');
      } else if (fieldInfo.includes('subject') || fieldInfo.includes('\u0442\u0435\u043c\u0430')) {
        await input.fill(data.subject || 'Inquiry');
      } else if (fieldInfo.includes('message') || fieldInfo.includes('\u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f') || fieldInfo.includes('\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435') || (await input.evaluate(el => el.tagName === 'TEXTAREA'))) {
        await input.fill(data.message || 'Hello, I am interested in your services.');
      } else if (type === 'checkbox' && (fieldInfo.includes('agree') || fieldInfo.includes('accept') || fieldInfo.includes('policy'))) {
        await input.check();
      }
    }

    // 3. Submit
    const submitButton = await bestForm.$('button[type="submit"], input[type="submit"], button:has-text("send"), button:has-text("\u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438")');
    if (submitButton) {
      console.log('Submitting form...');
      await submitButton.click();
      await page.waitForTimeout(5000); // Wait for submission
      console.log('Form submitted successfully');
      return { success: true };
    } else {
      throw new Error('No submit button found');
    }

  } catch (error: any) {
    console.error(`Failed to submit form at ${url}: ${error.message}`);
    return { success: false, error: error.message };
  } finally {
    await browser.close();
  }
}
