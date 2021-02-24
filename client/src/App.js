import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PostList from './components/post-list';
import PostForm from './components/post-form';
import Header from './components/header';
import Footer from './components/footer';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid>
          <Header />
          <Switch>
            <Route exact path='/posts' component={PostList} />
            <Route exact path='/posts/create' component={PostForm} />
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
