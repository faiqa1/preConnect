import "./App.css";
import Home from "./Components/Pages/HomePage/Home";
import Location from "./Components/Pages/HomePage/Location";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import Signup from "./Components/Pages/Signup.js/Signup";
import Layout from "./Components/Layout/Index";
import BlogPage1 from "./Components/Pages/Blog/BlogPage1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path='/page1'
            element={
              <Layout>
                <BlogPage1 />
              </Layout>
            }
          />
          <Route
            path="/loc"
            element={
              <Layout>
                {" "}
                <Location />{" "}
              </Layout>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
