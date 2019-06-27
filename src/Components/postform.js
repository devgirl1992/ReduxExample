import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
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
    };
    //call Action
    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <lable>
              <b>
                <i>Title:</i>
              </b>
            </lable>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <lable>
              <b>
                <i>Body:</i>
              </b>
            </lable>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">
            <b>
              <i>Submit</i>
            </b>
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
