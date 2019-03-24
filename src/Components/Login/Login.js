import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../Ducks/userReducer'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    })
  }

  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/api/login', user);
      this.props.getUser(res.data)
      this.props.history.push('/profile')
      const cartResponse = await axios.get('/api/cart')
      this.props.setCart(cartResponse.data)
    } catch {
      alert('incorrect username or password')
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="Login">
      <form onSubmit={e => this.login}>
        <h1>Login</h1>
        <input value={username} placeholder='Username' onChange={e => this.handleChange('username', e.target.value)}/>
        <input value={password} placeholder='Password' type='password' onChange={e => this.handleChange('password', e.target.value)}/>
        <button onClick={this.login}>Login</button>
        <Link to='/register'>
        <button>Register</button></Link>
      </form>
      </div>
    );
  }
}


export default connect(null, {getUser})(Login);
