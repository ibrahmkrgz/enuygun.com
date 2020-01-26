import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Selectors
import { isLoadingSelector, statusSelector } from '../../../redux/selectors';

// Page
import ApplicationPage from '../page/applicationPage';

// Actions
import { movieData } from '../../../redux/action';

// Constants
import { ROUTES } from '../../../config/routes';

const ApplicationContainer = ({ movieData, isLoading, status }) => {
  const [routes] = useState(ROUTES);

  useEffect(() => {
    async function fetchData() {
      await setTimeout(() => movieData(), 3000);
    }
    fetchData();
  }, [movieData]);

  return <ApplicationPage routes={routes} isLoading={isLoading} status={status} />;
};

ApplicationContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movieData: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  status: statusSelector(state),
});

const mapDispatchToProps = {
  movieData,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer));
