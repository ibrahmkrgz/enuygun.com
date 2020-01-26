import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Selectors
import { movieSelector } from '../../redux/selectors';

// Components
import { MovieList } from '../../components';

const HomePage = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? <MovieList movies={movies} /> : <strong> There is no data </strong>}
    </div>
  );
};
HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: movieSelector(state),
});

export default withRouter(connect(mapStateToProps)(HomePage));
