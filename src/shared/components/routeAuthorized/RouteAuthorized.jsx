import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import authSelector from '../../../store/selectors/authSelector';

const RouteAuthorized = ({isAuthorized, component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      return isAuthorized
        ? <Component {...props}/>
        : <Redirect to="/login"/>
    }}/>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: authSelector.getAuthorized(state)
});

export default connect(
  mapStateToProps,
  null
)(RouteAuthorized);