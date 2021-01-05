import React, { useEffect } from 'react';
import Article from './Article';
import './index.css';
import User from './User';

export default function Skeleton() {
    useEffect(() => {
        document.title = 'Skeleton App';
    });

    return (
        <div className='App'>
            <header>
                <h1>React Skeleton</h1>
            </header>
            <div className='content'>
                <Article />
                <User />
            </div>
        </div>
    );
}
