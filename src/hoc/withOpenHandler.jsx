import React from 'react';
import Transition from '../Transition';

const withOpenHandler = (WrappedComponent) => (props) => {
  return <WrappedComponent {...props}>{props.children}></WrappedComponent>;
};

export default withOpenHandler;
