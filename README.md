# Universal Translator

A modern, responsive web application that provides instant text translation services using Google's Translation API. Built with React and styled with Tailwind CSS, this application offers a clean, intuitive interface for translating text between multiple languages.

## Note:
Based on the project requirements and complexity, I decided not to go with props drilling and ContextAPI for data pass. Keep the implementation simple and solid.

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
git clone https://github.com/udithgunasekara/Universal-Translator.git
```

2. Install dependencies:
```bash
npm install
```

4. Start the development server:
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
