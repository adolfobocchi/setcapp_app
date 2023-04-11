import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../store/modules/Auth/actions';
import { Button, Input, LoginContainer } from './styled';

const Login = ({isAuthenticated , fetchLogin}) => {
    const  history = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      // Handle login logic here
      e.preventDefault();
      fetchLogin(login,password)
      history('/painel')
    };

    if(isAuthenticated) {
      /* console.log('auth')
      history('/painel') */
    }
  
    return (
      <LoginContainer>
        <Input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginContainer>
    );
  };
  
  
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLogin: (login,password) => dispatch(loginRequest(login,password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);