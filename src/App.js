import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Game from './components/pages/Game';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/Portfolio' exact component={Portfolio} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/game' exact component={Game} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
