import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import * as authActions from '../../redux/modules/auth';

@connect(
  state => ({ user: state.auth.user }),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

ReactDOM.render(
  <h1>John Stirniman</h1>,
  document.body
);
