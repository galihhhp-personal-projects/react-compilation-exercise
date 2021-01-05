import React from 'react';
import './skeleton-temp.css';
import SkeletonTemplate from './SkeletonTemplate';

const SkeletonProfile = ({ theme }) => {
    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className='skeleton-profile'>
                <div>
                    <SkeletonTemplate type='avatar' />
                </div>
                <div>
                    <SkeletonTemplate type='title' />
                    <SkeletonTemplate type='text' />
                    <SkeletonTemplate type='text' />
                </div>
            </div>
        </div>
    );
};

export default SkeletonProfile;
