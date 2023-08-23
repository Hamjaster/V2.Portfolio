import { createContext, useState } from 'react';

export const MyContext = createContext("");

export function ContextProvider({ children }) {

    const [theme, setTheme] = useState(!localStorage.getItem('theme') ? '' : localStorage.getItem('theme'))

    return (
        <MyContext.Provider value={{ theme, setTheme }} >
            {children}
        </MyContext.Provider>
    )
}
