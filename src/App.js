import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount(){
    axios.get('/api/session').then(res => {
      this.props.setUser(res.data);
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  };
};

function mapDispatchToProps(dispatch){
  return{
    setUser: (user) => dispatch({type:'SET_USER', payload:user})
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
