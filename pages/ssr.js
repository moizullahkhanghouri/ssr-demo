
import React from 'react';

// Fetch data on every request
export async function getServerSideProps() {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const data = await res.json();

    return {
        props: {
            post: data
        }
    };
}

// Display the fetched post
function SSRPage({ post }) {
    return (
        <div>
            <h1>Server-Side Rendered Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default SSRPage;
