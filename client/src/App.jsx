import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NotesDetail";
import Layout from "./pages/admin/Layout";
import Questions from "./pages/Questions";
import Videos from "./pages/Videos";

import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import "quill/dist/quill.snow.css"; // Import Quill styles
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
const App = () => {
  const { token } = useAppContext();
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        import questionTypes from "./pages/questionTypes";
        <Route path="/questions" element={<Questions />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* child route */}
        <Route path="/admin" element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
