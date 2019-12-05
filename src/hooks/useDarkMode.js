import {useState, useEfect}  from 'react';
import useLocalStorage  from './useLocalStorage';


const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage ('dark-mode', initialValue);

    const setMode = () => {
        setDarkMode(!darkMode)
    }
   
    return [darkMode, setMode]
};

export default useDarkMode;