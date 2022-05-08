import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
import CreateBlogPage from "./CreateBlogPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    AppBar,
    Container,
    Button, 
    ButtonGroup,
    Grid,
    Toolbar,
    Typography } from "@mui/material";

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
                            <ButtonGroup variant="text" aria-label="medium text button group">
                                <Button href="/" style={{color: 'white'}}>
                                    Main page
                                </Button>
                                <Button href="/createpost" style={{color: 'white'}}>
                                    Create post
                                </Button>
                                <Button href="/createblog" style={{color: 'white'}}>
                                    Create blog
                                </Button>
                                <Button href="/login" style={{color: 'white'}}>
                                    Login
                                </Button>
                                <Button href="/register" style={{color: 'white'}}>
                                    Register
                                </Button>
                                <Button href="/quit" style={{color: 'white'}}>
                                    Quit
                                </Button>
                            </ButtonGroup>
                        </Container>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/blog/:blogId" element={<BlogPage />} />
                            <Route path="/post/:postId" element={<PostPage />} />
                            <Route path="/createblog" element={<CreateBlogPage />} />
                            <Route path="/createpost" element={<CreatePostPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </Router>
                </Grid>
            </Grid>
        </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App name="World" />, appDiv);