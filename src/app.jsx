import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import BlogPostsPage from "./BlogPostsPage";
import IndividualPostPage from "./IndividualPostPage";
import ContactPage from "./ContactPage";

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
