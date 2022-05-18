import './App.css';
import React, { Component } from 'react';
import {fetchData} from './Functions';

import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'
// import Header from './components/layout/Header';
// import Content from './components/layout/Content';
// import Footer from './components/layout/Footer';
// import { Container } from 'react-bootstrap';

class App extends React.Component {
  
  // handleCheckBox = event =>{
  //   console.log(event.target.value)
  // }
  
  // fetchDataFormDynamoDb = event => {
  //   fetchData('id')
  // }
  

  render(){
  return  <div className='App'>
        Noise level<input onChange={this.handleCheckBox} type="checkbox" name="Noise" value = "Noise"/>
        Complaints<input onChange={this.handleCheckBox} type="checkbox" name="Complaints" value = "Complaints"/>
        Car contamination<input onChange={this.handleCheckBox} type="checkbox" name="Car" value = "Car"/>
        <button onClick={() => this.fetchDataFormDynamoDb()}> Fetch </button>

        </div>
        
  }
}
export default App;