import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';
import DeletePost from './components/DeletePost';
import styled from 'styled-components';

const App = () => {
    return (
      <Router>
      <Nav>
          <NavItem to="/">Blog List</NavItem>
          <NavItem to="/add">Add Post</NavItem>
      </Nav>
      <MainContent>
          <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/post/:id" element={<BlogPost />} />
              <Route path="/edit/:id" element={<AddEditPost />} />
              <Route path="/add" element={<AddEditPost />} />
              <Route path="/delete/:id" element={<DeletePost />} />
          </Routes>
      </MainContent>
  </Router>
    );
};

const Nav = styled.nav`
    display: flex;
    gap: 1em;
    padding: 1em;
    background-color: #2c3e50;
    justify-content: center;
`;

const NavItem = styled(Link)`
    color: white;
    font-weight: bold;
    padding: 0.5em 1em;
    border-radius: 4px;

    &:hover {
        background-color: #34495e;
    }
`;

const MainContent = styled.div`
    padding: 2em;
`;

export default App;
