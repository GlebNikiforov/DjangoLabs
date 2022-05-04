import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import CreateBlogPage from "./CreateBlogPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    AppBar,
    Container,
    Button, 
    Grid,
    Paper } from "@mui/material";

export default class App extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Button href="/" style={{color: 'white'}}>
                                Main page
                            </Button>
                            <Button href="/createpost" style={{color: 'white'}}>
                                Create post
                            </Button>
                            <Button href="/createblog" style={{color: 'white'}}>
                                Create blog
                            </Button>
                        </Container>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/blog/:blogId" element={<BlogPage />} />
                            <Route path="/post/:postId" element={<PostPage />} />
                            <Route path="/createpost" element={<CreatePostPage />} />
                            <Route path="/createblog" element={<CreateBlogPage />} />
                        </Routes>
                    </Router>
                </Grid>
            </Grid>
        </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App name="World" />, appDiv);