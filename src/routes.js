import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
// import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Checkout from './Components/Checkout/Checkout';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register'
import MyStore from './Components/MyStore/MyStore'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/register' component={Register}/> */}
        <Route path='/login' component={Login}/>
        <Route path='/products' component={Products} />
        <Route path='/checkout' component={Checkout}/>
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register}/>
        <Route path='/mystore' component={MyStore}/>
        <Route path='*' component={() => '404 NOT FOUND'} />
    </Switch>
) 

