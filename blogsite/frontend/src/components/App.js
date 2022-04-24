import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import PostPage from "./PostPage";
import CreatePostPage from "./CreatePostPage";
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
    Paper} from "@material-ui/core";

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
                        </Container>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={2} style={{padding: "2%"}}>
                        <Router>
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/post/:postId" element={<PostPage />} />
                                <Route path="/createpost" element={<CreatePostPage />} />
                            </Routes>
                        </Router>
                    </Paper>
                </Grid>
            </Grid>
        </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App name="World" />, appDiv);