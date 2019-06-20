import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/views/home';
import Find from '@/views/find';
import User from '@/views/user';
import Order from '@/views/order';

const Com = () => (
  <div className="container">
    <Switch>
      <Route path = '/home' component = { Home } />
      <Route path = '/find' component = { Find } />
      <Route path = '/order' component = { Order } />
      <Route path = '/user' component = { User } />
      <Redirect to = '/home' />
    </Switch>
    <footer className="footer">
      <ul>
        <NavLink to="/home"><span className="iconfont icon-shouye1"></span><p>推荐</p></NavLink>
        <NavLink to="/find"><span className="iconfont icon-faxianhover"></span><p>发现</p></NavLink>
        <NavLink to="/order"><span className="iconfont icon-wodedingdan"></span><p>订单</p></NavLink>
        <NavLink to="/user"><span className="iconfont icon-wode2"></span><p>我的</p></NavLink>
      </ul>
    </footer>
  </div>
)

export default Com;