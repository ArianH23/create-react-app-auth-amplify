import './App.css';
import React, { Component } from 'react';

// import Header from './components/layout/Header';
// import Content from './components/layout/Content';
// import Footer from './components/layout/Footer';
// import { Container } from 'react-bootstrap';

class App extends React.Component {
  render(){
  return  <div className='App'>
        Noise level<input type="checkbox" name="Noise" value = "Noise"/>
        Complaints<input type="checkbox" name="Noise" value = "Noise"/>
        Car contamination<input type="checkbox" name="Noise" value = "Noise"/>
        </div>
        
  }
}
export default App;