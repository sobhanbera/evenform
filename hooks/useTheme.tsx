/**
 * © Evenform
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 *
 * Purpose - this module control themes...
 */

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "default";

export interface ThemeContextStructure {
    theme: Theme;
    changeTheme(theme: Theme): void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextStructure>({
    theme: "default",
    changeTheme: (_theme: Theme) => {},
    toggleTheme: () => {},
});

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}
export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>("default");

    useEffect(() => {
        setTheme(() => {
            document.body.classList.add("default");

            return "default";
        });
    }, []);

    const changeTheme = (theme: Theme) => {
        setTheme(() => {
            document.body.classList.add(theme);

            return theme;
        });
    };

    const toggleTheme = () => {
        setTheme((theme) => {
            const updatedTheme = theme === "dark" ? "light" : "dark";

            document.body.className = updatedTheme;
            return updatedTheme;
        });
    };

    const value = {
        theme: theme,
        changeTheme,
        toggleTheme: toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            <div>{props.children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
