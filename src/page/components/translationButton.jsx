// src/components/TranslationButton.jsx
import React from 'react';

const TranslationButton = ({ onClick, loading }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
  >
    {loading ? 'Translating...' : 'Translate'}
  </button>
);

export default TranslationButton;