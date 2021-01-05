import React from 'react';
import Booklist from './VidTutorial/hooksContext/Components/Booklist';
import Navbar from './VidTutorial/hooksContext/Components/Navbar';
import ThemeContextProvider from './VidTutorial/hooksContext/Context/ThemeContext';

const ContextApp = () => {
    return (
        <div className='app'>
            <ThemeContextProvider>
                <Navbar />
                <Booklist />
            </ThemeContextProvider>
        </div>
    );
};

export default ContextApp;
