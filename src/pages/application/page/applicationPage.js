import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Favicon from 'react-favicon';
import { Helmet } from 'react-helmet';
import './applicationPage.scss';

// Components
import { Header, Footer, Loader, ErrorBoundary } from '../../../components';

const ApplicationPage = ({ routes, isLoading, status }) => {
  return (
    <div className="main">
      <Favicon url="https://www.enuygun.com/favicon.ico" />
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Enuygun Case Study</title>
        <meta charSet="utf-8" />
        <meta name="title" content="Enuygun.com" />
        <meta name="description" content="Enuygun.com Case Study" />
        <meta name="og:title" property="og:title" content="Enuygun.com" />
        <meta name="og:description" property="og:description" content="Enuygun.com Case Study" />
      </Helmet>

      {isLoading && <Loader />}

      {status !== '' ? (
        <ErrorBoundary status={status} />
      ) : (
        <>
          <Header />
          <div className="body">
            <Switch>
              {Object.keys(routes).map(key => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Route exact key={key} {...routes[key]} />
              ))}
              <Redirect from="*" to="/notfound" />
            </Switch>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

ApplicationPage.propTypes = {
  routes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export default withRouter(ApplicationPage);
