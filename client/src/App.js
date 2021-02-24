import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostList from './components/post-list';
import PostForm from './components/post-form';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/posts' component={PostList} />
          <Route exact path='/posts/create' component={PostForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
