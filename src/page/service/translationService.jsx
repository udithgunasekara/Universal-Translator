import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

export const translateText = async (text) => {
  if (!API_KEY) {
    throw new Error('API key is not configured. Please check your environment variables.');
  }

  if (!text) {
    throw new Error('No text provided for translation');
  }

  try {
    const response = await axios({
      method: 'POST',
      url: 'https://translation.googleapis.com/language/translate/v2',
      params: {
        key: API_KEY
      },
      data: {
        q: text,
        target: 'en',
        format: 'text'
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.data && response.data.data && response.data.data.translations) {
      return response.data.data.translations[0].translatedText;
    } else {
      throw new Error('Invalid response format from translation service');
    }
    
  } catch (error) {
    console.error('Translation error details:', error.response?.data || error);
    
    if (error.response?.status === 400) {
      throw new Error('Invalid request. Please check your input text.');
    }
    
    if (error.response?.status === 403) {
      throw new Error('Authentication failed. Please check your API key.');
    }
    
    throw new Error(
      error.response?.data?.error?.message || 
      'Translation failed. Please try again.'
    );
  }
};