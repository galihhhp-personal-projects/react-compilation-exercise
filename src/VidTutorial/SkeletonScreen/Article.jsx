import React, { useState, useEffect } from 'react';
import SkeletonArticle from './SkeletonArticle';

const Article = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const result = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const data = await result.json();
            setArticles(data);
        }, 3000);
    });

    return (
        <div>
            <h2>Article</h2>
            {articles &&
                articles.map((articles) => (
                    <div key={articles.id}>
                        <h3>{articles.title}</h3>
                        <p>{articles.body}</p>
                    </div>
                ))}

            {!articles &&
                [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
        </div>
    );
};

export default Article;
