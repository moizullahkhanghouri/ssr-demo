
import React from 'react';

export async function getServerSideProps(context) {
    // Get the dynamic ID from the URL
    const { id } = context.params;

    // Fetch the post matching that ID
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await res.json();

    // Send the fetched post to the page
    return {
        props: {
            post: data
        }
    };
}

function SSRPage({ post }) {
    return (
        <div>
            <h1>Dynamic Server-Side Rendered Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default SSRPage;
