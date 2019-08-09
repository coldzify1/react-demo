import React from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'


class App extends React.Component {
  
  render(){
    return (
    <div className="App">
      <Header/>
      
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Footer/>
    </div>
  );
  }
  
}

export default App;
