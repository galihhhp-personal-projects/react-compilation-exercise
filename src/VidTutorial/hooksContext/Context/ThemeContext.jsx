import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isLight: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
