// Stretch: Second Custom Hook
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    try {
      someValue ? document.querySelector('body').classList.add('dark-mode')
        : document.querySelector('body').classList.remove('dark-mode')
    }
    catch(error) {
      return setSomeValue
    }
  }, [someValue, setSomeValue])
  return [someValue, setSomeValue]
}