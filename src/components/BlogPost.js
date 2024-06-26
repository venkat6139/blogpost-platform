import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPosts } from '../blogPosts';
import styled from 'styled-components';

const BlogPost = () => {
    const { id } = useParams();
    const posts = getBlogPosts();
    const post = posts[id];

    return (
        <PostContainer>
            <h1>{post.title}</h1>
            <p>By: {post.author}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <Content>{post.content}</Content>
            <ButtonContainer>
                <StyledLink to={`/edit/${id}`}>Edit</StyledLink>
                <StyledLink to={`/delete/${id}`}>Delete</StyledLink>
            </ButtonContainer>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
`;

const Content = styled.div`
    margin-top: 1em;
    white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
    margin-top: 1em;
    display: flex;
    gap: 1em;
`;

const StyledLink = styled(Link)`
    background-color: #3498db;
    color: white;
    padding: 0.5em 1em;
    border-radius: 4px;
    text-align: center;

    &:hover {
        background-color: #2980b9;
    }
`;

export default BlogPost;
