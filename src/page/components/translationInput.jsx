import React from 'react';

const TranslationInput = ({ value, onChange, dir, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    dir={dir}
    placeholder={placeholder}
    className="w-full h-full min-h-[200px] p-6 rounded-xl border-none 
               bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none
               transition-all resize-none text-lg"
  />
);

export default TranslationInput;