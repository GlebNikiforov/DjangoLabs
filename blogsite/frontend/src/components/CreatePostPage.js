import React, { Component } from "react";
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormHelperText,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel } from "@material-ui/core";
import { Link } from "react-router-dom";


export default class CreatePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog_name: "",
            title: "",
            image_url: "",
            content: ""
        }
        
        this.handleBlogNameChange = this.handleBlogNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handlePublishButtonPressed = this.handlePublishButtonPressed.bind(this);
    }

    handleBlogNameChange(e) {
        this.setState({
            blog_name: e.target.value,
        });
    }
    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }
    handleImageUrlChange(e) {
        this.setState({
            image_url: e.target.value,
        });
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value,
        });
    }
    handlePublishButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                blog_name: this.state.blog_name,
                title: this.state.title,
                image_url: this.state.image_url,
                content: this.state.content
            })
        };
        fetch("api/createpost", requestOptions)
            .then((response) => response.json())
            .then((data)     => window.location.pathname = '/');
    }

    render() {
        return(
            <Grid container spacing={1}  >
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Post creation
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl style={{width: '58%'}}>
                        <TextField
                            required={true}
                            fullWidth
                            type="text"
                            onChange={this.handleBlogNameChange} />
                        <FormHelperText>
                            <div align="center">
                                Blog name
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl style={{width: '58%'}}>
                        <TextField
                            required={true}
                            fullWidth
                            type="text"
                            onChange={this.handleTitleChange}/>
                        <FormHelperText>
                            <div align="center">
                                Post title
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl style={{width: '58%'}}>
                        <TextField
                            required={true}
                            fullWidth
                            type="text"
                            onChange={this.handleImageUrlChange}/>
                        <FormHelperText>
                            <div align="center">
                                Image url
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl style={{width: '58%'}}>
                        <TextField
                            required={true}
                            fullWidth
                            multiline
                            variant="outlined"
                            type="text"
                            onChange={this.handleContentChange}/>
                        <FormHelperText>
                            <div align="center">
                                Content
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} align="center">
                    <Button color="primary" variant="contained" onClick={this.handlePublishButtonPressed}>
                        Publish
                    </Button>
                </Grid>
                <Grid item xs={6} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        );
    }
}