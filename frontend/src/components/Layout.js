import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const propTypes = {
  children: PropTypes.object.isRequired,
};

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <section>{children}</section>
    </React.Fragment>
  );
}

Layout.propTypes = propTypes;
