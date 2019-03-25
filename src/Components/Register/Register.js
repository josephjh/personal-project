import React, {Component} from 'react';
import axios from 'axios';
import './Register.css'

class Register extends Component {
    constructor(){
      super()
    
      this.state = {
        username: '',
        email:'',
        password:'',
        first_name:'',
        last_name:''
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
            first_name: this.state.first_name,
            last_name: this.state.last_name

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
      const {first_name, last_name, username, email, password} = this.state
      return (
        <div className="register-container">
          <div className='register'>
            <form className='register-submit' onSubmit={this.register}>
              <input value={first_name} placeholder='First Name' onChange={e => this.handleChange('first_name', e.target.value)}/>
              <input value={last_name} placeholder='Last Name' onChange={e => this.handleChange('last_name', e.target.value)}/>          
              <input value={username} placeholder='Username' onChange={e => this.handleChange('username', e.target.value)}/>
              <input value={email} placeholder='Email' onChange={e => this.handleChange('email', e.target.value)}/>
              <input value={password} type='Password' placeholder='password' onChange={e => this.handleChange('password', e.target.value)}/>
              <button className='register-button' type='submit'>Register</button>
            </form>
          </div>
            
        </div>
      );
    };
  };
  
  export default Register;