import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(){
      super()
    
      this.state = {
        username: '',
        email:'',
        password:''
      }
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
        })
    }

    register = async () => {
        let user = {
            username: this.state.username,
            email: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/api/register', user);
            console.log(res)
            this.props.history.push('/')
        } catch (err) {
            alert('this user already exists')
        }
    }

    render() {
      const {username, email, password} = this.state
      return (
        <div className="Register">
          <h1>Register</h1>
          <input value={username} placeholder='username' onChange={e => this.handleChange('username', e.target.value)}/>
          <input value={email} placeholder='email' onChange={e => this.handleChange('email', e.target.value)}/>
          <input value={password} type='password' placeholder='password' onChange={e => this.handleChange('password', e.target.value)}/>
          <button onClick={this.register}>Register</button>
        </div>
      );
    }
  }
  
  export default Register;