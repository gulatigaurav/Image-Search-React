import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Divider } from 'material-ui';
import NavBar from './components/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './containers/Search/Search';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
     <NavBar />
     <div className='container'> 
      <Search />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
