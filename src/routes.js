import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './globals/App';
import ViewPost from './globals/ViewPost';
import Posts from './components/Posts';
import AddPost from './components/AddPost';




const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Posts } />
      <Route path="/posts" component={ Posts } />
      <Route path="/add-post" component={ AddPost } />
      <Route name="view-post/:value" handler={ViewPost} />
    </Route>
  </Router>
);

export default Routes;
