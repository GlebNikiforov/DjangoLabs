import React, { Component } from "react";
import {
    Divider,
    Typography,
    Chip,
    Paper } from "@mui/material";

export default class PostPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            blog_name: "",
            title: "",
            upload_date: "",
            image_url: "https://www.ndca.org/co/images/stock/no-image.png",
            content: ""
        }
        this.postId = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
        this.getPostDetails();
    }

    getPostDetails() {
        fetch('/api/getpost?id=' + this.postId)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    blog_name: data.blog_name,
                    title: data.title,
                    upload_date: data.upload_date,
                    image_url: data.image_url,
                    content: data.content
                })
            });
    }

    render()
    {
        return (
            <Paper elevation={2} style={{padding: "2%"}}>
                <img src={this.state.image_url} style={{height: 360, width: "100%", objectFit: "cover"}}></img>
                <Typography component="h4" variant="h4" align="center">
                    {this.state.title}
                </Typography>
                <Divider>
                    <Chip label={this.state.blog_name + ' (' + this.state.upload_date + ')'} />
                </Divider>
                    {this.state.content.split('\n').map((textline, index) =>{
                        return(
                            <Typography variant="body1" style={{textAlign: 'justify', textIndent: '60px'}}>
                                    {textline}
                            </Typography>
                        )
                    })}
            </Paper>
        );
    }
    /* 
                <Typography variant="body1" component="div">
                    {this.state.content}
                </Typography>
                */
}