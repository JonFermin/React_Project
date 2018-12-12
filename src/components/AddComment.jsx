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
    against: '',
    err: {},
    err2: {},
    errtext:'Add For Comment',
    errtext2:'Add Against Comment'
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
    console.log(e);
    if (this.state.for === ""){
      this.setState({
        err: {
          borderColor: "red",
        },
        errtext:'Invalid Input',
      });
      return;
    }
    firebase.database().ref('posts/' + this.props.my_key + "/for").push({
      text: this.state.for,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      text: '',
      err: {},
      errtext:'Add For Comment',
      for: ''
    });
  }

  handleSubmitA = (e) => {
    e.preventDefault();
    if (this.state.against === ""){
      this.setState({
        err2: {
          borderColor: "red",
        },
        errtext2:'Invalid Input',
      });
      return;
    }
    
    firebase.database().ref('posts/' + this.props.my_key + "/against").push({
      text: this.state.against,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      text: '',
      err2: {},
      errtext2:'Add Against Comment',
      against: ''
    });
  }


  render() {
    
    return (
      <div className="comment_submit">
        <div className="submit_for">
          <textarea 
            placeholder={this.state.errtext}
            onChange={ this.handleChangeF } 
            value={ this.state.for }
            id="c-for"
            style={this.state.err}
          />
          <button id="Fors"  
            type="submit" 
            onClick={ this.handleSubmitF }
            className="submit_me"
          > FOR </button>
        </div>
        <div className="submit-against">
          <textarea 
            placeholder={this.state.errtext2} 
            onChange={ this.handleChangeA } 
            value={ this.state.against }
            id="c-against"
            style={this.state.err2}
          />
          <button id="Agains"
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
