import React, { Component } from "react";
import {
    Grid,
    Button,
    Typography } from "@material-ui/core";

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            postSet: []
        };
        this.getPostSet();
    }

    getPostSet() {
        fetch('/api/post')
            .then((response) => response.json())
            .then((data) => this.setState({postSet: data}))
    }

    render()
    {
        return(
            <Grid container spacing={4}>
                {this.state.postSet.reverse().map((post, index) => {
                    return(
                        <Grid item xs={6}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <img src={post.image_url} style={{height: 120, width: "100%", objectFit: "cover"}}></img>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" align="left">
                                        {post.upload_date} // {post.blog_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" align="right">
                                        <Button color="primary" variant="outlined" size="small" onClick={() => {window.location.pathname = '/post/' + (this.state.postSet.length - index)}}>
                                            Open
                                        </Button>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h6" variant="h6" align="left">
                                        {post.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}