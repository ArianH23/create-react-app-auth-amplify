import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App2 from './App2';

// import { ConfigurationOptions } from 'aws-sdk'
import * as AWS from 'aws-sdk'

// import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'dynamodb.eu-west-1.amazonaws.com',
  accessKeyId: ['AKIA6C5MES4OWIAO5TXO'],
  secretAccessKey: ['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']
});

// this.dynamodb = new AWS.DynamoDB();
// this.docClient = new AWS.DynamoDB.DocumentClient();

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();