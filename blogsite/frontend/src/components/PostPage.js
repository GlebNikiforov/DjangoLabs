import React, { Component } from "react";

export default class PostPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            blog_name: "Some blog",
            title: "This is title",
            upload_date: "05.12.1998",
            image_url: "https://www.ndca.org/co/images/stock/no-image.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tortor eu faucibus mattis. Pellentesque justo arcu, viverra quis velit vitae, molestie laoreet diam. Ut vehicula, nisl vel rutrum imperdiet, libero diam eleifend nibh, et porttitor lorem arcu ac mi. Suspendisse sagittis nibh ipsum, a laoreet tortor bibendum ac. Donec blandit felis mauris, vitae accumsan ex luctus eget. Praesent quam mi, maximus sed laoreet ac, luctus id ex. Nunc et urna in mi bibendum iaculis id sit amet sem. Morbi accumsan finibus massa, vel iaculis metus convallis ac. Fusce nec turpis eget velit aliquet tincidunt sit amet sit amet arcu. Etiam massa purus, ornare et ultrices vitae, accumsan in augue. Mauris dapibus semper lectus, eget faucibus erat pellentesque eu. Donec lacinia libero risus, nec finibus risus fringilla eu. Morbi nisl orci, dictum eu diam ac, pellentesque tincidunt elit."
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
            <div>
                <img src={this.state.image_url} style={{height: 240, width: "100%", objectFit: "cover"}}></img>
                <h4 align={"center"}>{this.state.title}</h4>
                <p align={"right"}>{this.state.blog_name} <span>({this.state.upload_date})</span></p>
                <div>{this.state.content}</div>
            </div>
        );
    }
}