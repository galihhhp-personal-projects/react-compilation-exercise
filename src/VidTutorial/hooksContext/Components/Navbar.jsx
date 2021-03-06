import React, { Component } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default class Navbar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <nav
                            style={{
                                background: theme.ui,
                                color: theme.syntax,
                            }}
                            className='d-flex flex-column align-items-center'>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
