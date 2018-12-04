// routes.js

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Posts from './components/Posts';
import AddPost from './components/AddPost';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <Route path="/posts" component={ Posts } />
      <Route path="/add-post" component={ AddPost } />
    </Route>
  </Router>
);

export default Routes;