// 3. Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
// First MVP custom hook - they let you use state and other React features without writing a class. Building your own Hooks lets you create component logic into reusable functions. 
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error(
      'Invalid Param: useLocalStorage should receive a string for the first argument'
    );
  }

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
      return (storedValue)
    }
  });

  const setValue = value => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue];
};