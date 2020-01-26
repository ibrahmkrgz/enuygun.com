import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './header.scss';

const Header = ({ history }) => (
  <div className="header">
    <div className="header-element" tabIndex={0} role="button" onClick={() => history.push('/')}>
      Home
    </div>

    <div
      className="header-element"
      tabIndex={0}
      role="button"
      onClick={() => history.push('/about')}
    >
      About
    </div>
  </div>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
