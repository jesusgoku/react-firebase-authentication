import React, { Component } from 'react';

import Login from './components/auth/Login';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
