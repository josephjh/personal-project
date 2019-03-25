import React, {Component} from 'react';
import './Profile.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../Ducks/userReducer'
import {Link, Redirect} from 'react-router-dom';

class Profile extends Component {
  
    render() {
      if(!this.props.user.first_name) {
        return <Redirect to='/login'/>
      }
      return (
        <React.Fragment>
          <div className='profile-body'>
            <div className="container-profile">
                <div className='section1'>
                  <h2>Account Details:
                    <hr></hr>
                    <h4 className='info'>{this.props.user.first_name} {this.props.user.last_name}</h4>
                    <h4 className='info'>{this.props.user.username}</h4>
                    <h4 className='info'>{this.props.user.email}</h4>
                  </h2>
                </div>
                <div className='section2'>
                  <Link to='/mystore' id='store' style={{textDecoration:'none'}}><h2>My Store</h2></Link>
                </div>
            </div>
          </div>
        </React.Fragment>
      );
    };
  }

  function mapStateToProps(reduxState){
    return reduxState
  };

  const mapDispatchToProps = {
    getUser
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));