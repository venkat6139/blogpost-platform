import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../blogPosts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getBlogPosts());
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <List>
                {posts.map((post, index) => (
                    <ListItem key={index}>
                        <Link to={`/post/${index}`}>
                        <h2>{post.title}</h2>
                            <Author>By: {post.author}</Author>
                            <Summary>{post.summary}</Summary>
                            <Date1>{new Date(post.date).toLocaleDateString()}</Date1>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ListItem = styled.div`
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
`;
const Author = styled.p`
    margin: 0.5em 0;
    font-style: italic;
`;

const Summary = styled.p`
    margin: 0.5em 0;
    color: #666;
`;

const Date1 = styled.p`
    margin: 0.5em 0;
    font-size: 0.9em;
    color: #999;
`;

export default BlogList;
