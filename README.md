# Universal Translator

A modern, responsive web application that provides instant text translation services using Google's Translation API. Built with React and styled with Tailwind CSS, this application offers a clean, intuitive interface for translating text between multiple languages.

## Features

- Real-time text translation to English
- Support for Right-to-Left (RTL) and Left-to-Right (LTR) scripts
- Responsive design that works across all device sizes
- Clean and intuitive user interface
- Loading states and error handling
- Gradient background with modern UI components

## Technology Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **Translation Service:** Google Translation API
- **Deployment:** GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── TranslationInput.jsx
│   └── TranslationButton.jsx
├── service/
│   └── translationService.js
|__ translator.jsx
└── App.js
```

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Install GitHub Pages for deployment:
```bash
npm install gh-pages --save-dev
```

4. Configure your Google Translation API credentials in your environment variables (refer to Google Cloud Console documentation for API setup)

5. Start the development server:
```bash
npm start
```

## Usage

1. Enter text in the input field on the left side
2. Select script direction (RTL/LTR) if needed using the toggle button
3. Click "Translate Now" to get the translation
4. The translated text will appear in the right panel


## Error Handling

The application includes comprehensive error handling:
- Input validation for empty text
- API error handling with user-friendly error messages
- Loading states during translation
