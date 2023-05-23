import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenIsExpired } from '../store/modules/Auth/actions';

const PrivateRoute = ({ isAuthenticated, children }) => {

      
      return (
            isAuthenticated ? children : <Navigate to="/login" />
      );
}

const mapStateToProps = (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
});

const mapDispatchToProps = dispatch => {
      return {
        tokenIsExpired: () => dispatch(tokenIsExpired()),
      };
    };

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);