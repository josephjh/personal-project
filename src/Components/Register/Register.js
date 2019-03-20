import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(){
      super()
    
      this.state = {
        username: '',
        email:'',
        password:'',
        firstName:'',
        lastName:''
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
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName

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
      const {firstName, lastName, username, email, password} = this.state
      return (
        <div className="Register">
          <h1>Register</h1>
          <form onSubmit={this.register}>
            <input value={firstName} placeholder='First Name' onChange={e => this.handleChange('firstName', e.target.value)}/>
            <input value={lastName} placeholder='Last Name' onChange={e => this.handleChange('lastName', e.target.value)}/>          
            <input value={username} placeholder='Username' onChange={e => this.handleChange('username', e.target.value)}/>
            <input value={email} placeholder='Email' onChange={e => this.handleChange('email', e.target.value)}/>
            <input value={password} type='Password' placeholder='password' onChange={e => this.handleChange('password', e.target.value)}/>
            <button type='submit'>Register</button>
          </form>
        </div>
      );
    };
  };
  
  export default Register;