import React, { Component } from 'react';
import '../globals/css/App.css';
import { browserHistory } from 'react-router';
// import { withRouter } from 'react-router-dom';

class AddPost extends Component {
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
    if (this.state.title === ""){
      alert("Please Enter a Question");
      return;
    }
    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0,
      for: {
      },
      against: {
      }
    });

    this.setState({
      title: ''
    });
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="AddPost">
        <input 
          type="text" 
          placeholder="Write the title of your post" 
          onChange={ this.handleChange } 
          value={ this.state.title }
          id="add-post"
        />
        <button 
          type="submit" 
          onClick={ this.handleSubmit }
          class="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddPost;
