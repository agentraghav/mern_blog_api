import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PostList from './components/post-list';
import PostForm from './components/post-form';
import PostPage from './components/post-page';
import Header from './components/header';
import Footer from './components/footer';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container fluid>
          <Switch>
            <Route path='/' exact component={PostList} />
            <Route path='/add' exact component={PostForm} />
            <Route path='/post/:id' exact component={PostPage} />
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
