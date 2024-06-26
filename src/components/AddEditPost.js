import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPosts, saveBlogPosts } from '../blogPosts';
import styled from 'styled-components';

const AddEditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (id) {
            const posts = getBlogPosts();
            const post = posts[id];
            setTitle(post.title);
            setAuthor(post.author);
            setContent(post.content);
            setDate(post.date);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, author, content, date };
        const posts = getBlogPosts();
        if (id) {
            posts[id] = newPost;
        } else {
            posts.push(newPost);
        }
        saveBlogPosts(posts);
        navigate('/');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit' : 'Add'} Post</h1>
            <label>Title:</label>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Author:</label>
            <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <label>Content:</label>
            <TextArea value={content} onChange={(e) => setContent(e.target.value)} required />
            <label>Date:</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <ButtonContainer>
                <Button type="submit">Save</Button>
                <Button type="button" onClick={() => navigate('/')}>Cancel</Button>
            </ButtonContainer>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: white;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Input = styled.input`
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 200px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1em;
`;

const Button = styled.button`
    padding: 0.5em 1em;
`;

export default AddEditPost;
