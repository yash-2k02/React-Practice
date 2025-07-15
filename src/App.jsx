import { Routes, Route } from "react-router-dom";
import BlogLayout from "./layouts/BlogLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";

const Contributers = lazy(() => import('./pages/Contributers'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:postId" element={<BlogPost />} />
        <Route
          path="contributers"
          element={
            <Suspense fallback={<p>Loading Contributers...</p>}>
              <Contributers />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

