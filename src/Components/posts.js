import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    console.log(this.state.posts);
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
    ));

    return (
      <div>
        <h1>POSTS</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
