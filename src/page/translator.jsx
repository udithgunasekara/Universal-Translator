import React, { useState } from 'react';
import TranslationInput from './components/translationInput';
import { translateText } from './service/translationService';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isRTL, setIsRTL] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslation = async () => {
    if (!inputText.trim()) {
      setError('Please enter text to translate.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const result = await translateText(inputText);
      setTranslatedText(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-medium text-green-800">Universal Translator</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDirection}
                className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 
                         transition-colors font-medium"
              >
                Script: &nbsp;  
                {isRTL ? 'Right-to-Left' : 'Left-to-Right'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-4xl font-light mb-4">
            Transform Your Text Instantly
          </h2>
          <p className="text-gray-600">
            Quick and accurate translations at your fingertips.
          </p>
          <p className="text-gray-900">
            Translate any language into English.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <TranslationInput
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
                placeholder="Enter text here..."
              />
            </div>
            
            <div>
              {translatedText && (
                <div className="h-full bg-gray-50 rounded-xl p-6">
                  <p className="text-lg">{translatedText}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleTranslation}
              disabled={loading}
              className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 
                         transition-colors disabled:bg-emerald-300 flex items-center space-x-2"
            >
              {loading ? (
                <span className="inline-block animate-spin mr-2">⟳</span>
              ) : null}
              <span>{loading ? 'Translating...' : 'Translate Now'}</span>
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-center">
              {error}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};


export default Translator;