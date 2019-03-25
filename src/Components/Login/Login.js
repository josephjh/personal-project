import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../Ducks/userReducer'
import './Login.css'

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
      
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-container">
        <div className="login">
          <form className='login-submit'onSubmit={e => this.login}>
            <input value={username} placeholder='Username' type='text' id='username' onChange={e => this.handleChange('username', e.target.value)}/>
            <input value={password} placeholder='Password' type='password' id='password' onChange={e => this.handleChange('password', e.target.value)}/>
            <button className='login-button' type='submit' onClick={this.login}>Login</button>
            <Link to='/register'>Need an Account?</Link>
          </form>
        </div>
      </div>
      
    );
  }
}


export default connect(null, {getUser})(Login);
