import React from 'react';
import SkeletonTemplate from './SkeletonTemplate';
import './skeleton-temp.css';

const SkeletonArticle = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className='skeleton-article'>
                <SkeletonTemplate type='title' />
                <SkeletonTemplate type='text' />
                <SkeletonTemplate type='text' />
                <SkeletonTemplate type='text' />
            </div>
        </div>
    );
};

export default SkeletonArticle;
