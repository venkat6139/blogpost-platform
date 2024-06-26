export const getBlogPosts = () => {
    const posts = JSON.parse(localStorage.getItem('blogPosts'));
    return posts || [];
};

export const saveBlogPosts = (posts) => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
};
