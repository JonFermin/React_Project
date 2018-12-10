import React, { Component } from 'react';

class AddComment extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: ''
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add For" id="c-for"/>
        <input type="button" value="Submit"/> 

        <input type="text" placeholder="Add Against" id="c-against"/>
        <input type="button" value="Submit"/> 
      </div>
    );
  }
}

export default AddComment;
