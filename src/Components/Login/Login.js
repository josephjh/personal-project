import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
      console.log(res)
      this.props.history.push('/products')
    } catch {
      alert('incorrect username or password')
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="Login">
        <h1>Login</h1>
        <input value={username} onChange={e => this.handleChange('username', e.target.value)}/>
        <input value={password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
        <button onClick={this.login}>Login</button>
        <Link to='/register'>
        <button>Register</button></Link>
      </div>
    );
  }
}

export default Login;