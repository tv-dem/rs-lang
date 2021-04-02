import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginFormContainer';
import SignInForm from '../../Components/SignInForm/SignInFormContainer';
import './AuthorizationPage.scss';

const AuthorizationPage: React.FC = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <Switch>
          <Route exact path='/authorization' component={LoginForm} />
          <Route exact path='/authorization/registration' component={SignInForm} />
        </Switch>
      </div>
    </div>
  );
};

export default AuthorizationPage;
