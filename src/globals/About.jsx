import React, { Component } from 'react';

import { withRouter } from "react-router";



var FontAwesome = require('react-fontawesome');

class About extends Component { 

  
  render() {

    
    
    return (
         <div>
      <header>
        What is this Website?
      </header>

     

      <footer>
        This website is a reddit inspired react based app that allows you to post a topic and comment on those topics.It also has the function of upvoting and downvoting both the post and the comments. Happy Debating!
      </footer>
    </div>
  );
  }
}

export default withRouter(About);