import React, {Component} from 'react';
import './Profile.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../Ducks/Reducer'
import axios from 'axios';
import {Link} from 'react-router-dom';
class Profile extends Component {

  componentDidMount(){
    axios.get('/api/session').then(res => {
      this.props.getUser(res.data);
    })
  }
  
    render() {
      return (
        <React.Fragment>
          {!this.props.first_name
          ? 
            <Link to='/login'></Link> 
          :
            <div className="container">
              <div ></div>
                <div className='section1'>
                  <div>Order History:</div>
                </div>
                <div className='section2'>
                  <div>Account Details:
                    <div className='info'>{this.props.first_name} {this.props.last_name}</div>
                    <div className='info'>{this.props.username}</div>
                    <div className='info'>{this.props.email}</div>
                  </div>
                </div>
              <Link to='/mystore' id='store' style={{textDecoration:'none'}}><div>My Store</div></Link>
            </div>
          }
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
