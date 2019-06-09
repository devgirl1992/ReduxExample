import React, { Component } from "react";

export default class postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "content-type": "application/json"
      },
      body: JSON.stringify(post) 
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <lable>Title:</lable>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <lable>Body:</lable>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
