# Gala Clone (elektronink.org.ua)

Full clone of the Gala OSINT Agency website and its core automation service.

## Features
- **Frontend**: React + TypeScript + Vanilla CSS (Astro look-alike).
- **Backend**: Express.js server for campaign management.
- **Automation Tool**: Playwright-based contact form submitter.
- **Legal Compliance**: Built-in rate limiting and intelligent form handling.

## Project Structure
- `/`: Root directory with React frontend.
- `/server`: Node.js Express backend and promotion tool logic.

## Getting Started

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm start
```

## Promotion Tool Logic
The system automatically:
1. Visits a target website.
2. Finds the "Contact" page.
3. Identifies form fields (Name, Email, Message) using heuristics.
4. Fills the form and submits.
5. Respects a 5-minute rate limit per site.

## Disclaimer
This project is for educational and authorized marketing purposes only. Ensure compliance with local laws before using for mass outreach.
