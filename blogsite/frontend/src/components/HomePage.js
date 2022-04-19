import React, { Component } from "react";
import BlogPage from "./BlogPage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<p>Home page</p>} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/createpost" element={<CreatePostPage />} />
                </Routes>
            </Router>
            </>
        );
    }
}