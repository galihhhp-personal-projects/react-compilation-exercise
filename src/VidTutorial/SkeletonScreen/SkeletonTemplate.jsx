import React from 'react';
import './skeleton-temp.css';

const SkeletonTemplate = ({ type }) => {
    const classes = `skeleton ${type}`;
    return <div className={classes}></div>;
};

export default SkeletonTemplate;
