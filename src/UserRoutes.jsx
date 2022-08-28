import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import PostsSearchPage from 'pages/PostsSearchPage/PostsSearchPage';
import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsSearchPage />} />
      <Route path="/posts/:id" element={<SinglePostPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
