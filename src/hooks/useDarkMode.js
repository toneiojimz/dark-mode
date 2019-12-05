import useLocalStorage  from './useLocalStorage';
import {useState} from 'react';

const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage ('darkmode', initialValue);

    const setMode = () => {
        setDarkMode(!darkMode)
    }
   
    return [darkMode, setMode]
};

export default useDarkMode;