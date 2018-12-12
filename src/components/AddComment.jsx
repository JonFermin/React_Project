import React, { Component } from 'react';

import * as firebase from "firebase";

class AddComment extends Component {
  constructor() {
    super();
    this.handleChangeF = this.handleChangeF.bind(this);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleSubmitF = this.handleSubmitF.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    
  }

  state = {
    for: '',
    against: ''
  };

  handleChangeF = (f) => {
    this.setState({
      for: f.target.value
    });
  }

  handleChangeA = (a) => {
    this.setState({
      against: a.target.value
    });
  }

  handleSubmitF = (e) => {
    e.preventDefault();
    
    firebase.database().ref('posts/' + this.props.my_key + "/for").push({
      text: this.state.for,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      text: ''
    });
  }

  handleSubmitA = (e) => {
    e.preventDefault();
    
    firebase.database().ref('posts/' + this.props.my_key + "/against").push({
      text: this.state.against,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      text: ''
    });
  }


  render() {
    return (
      <div className="comment_submit">
        <div className="submit_for">
          <textarea 
            placeholder="Add For" 
            onChange={ this.handleChangeF } 
            value={ this.state.for }
            id="c-for"
          />
          <button 
            type="submit" 
            onClick={ this.handleSubmitF }
            className="submit_me"
          > FOR </button>
        </div>
        <div className="submit-against">
          <textarea 
            placeholder="Add Against" 
            onChange={ this.handleChangeA } 
            value={ this.state.against }
            id="c-against"
          />
          <button 
            type="submit" 
            onClick={ this.handleSubmitA }
            className="submit_me"
          > AGAINST </button> 
        </div>
      </div>
      
    );
  }
}

export default AddComment;
