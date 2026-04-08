import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/posts/:postId" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
