/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './movieList.scss';

const MovieList = ({ movies, history }) => {
  const movieOnClick = movie => {
    history.push({
      pathname: `movie-detail/${movie.show.id}`,
      state: {
        movie,
      },
    });
  };
  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie, index) => (
            <li key={index}>
              <a
                role="button"
                tabIndex={0}
                key={index}
                onClick={() => movieOnClick(movie)}
                className="movie-list-element"
              >
                {movie.show.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
