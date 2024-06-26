import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPosts, saveBlogPosts } from '../blogPosts';
import styled from 'styled-components';

const DeletePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        const posts = getBlogPosts();
        posts.splice(id, 1);
        saveBlogPosts(posts);
        navigate('/');
    };

    return (
        <DeleteContainer>
            <h1>Are you sure you want to delete this post?</h1>
            <ButtonContainer>
                <Button onClick={handleDelete}>Yes, Delete</Button>
                <Button onClick={() => navigate(-1)}>No, Go Back</Button>
            </ButtonContainer>
        </DeleteContainer>
    );
};

const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: white;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1em;
`;

const Button = styled.button`
    padding: 0.5em 1em;
`;

export default DeletePost;
