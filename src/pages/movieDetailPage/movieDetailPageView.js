import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, useLocation } from 'react-router-dom';
import get from 'lodash/get';
import parse from 'html-react-parser';
import './movieDetailPageStyles.scss';

// Components
import { ImageLoader } from '../../components';

const MovieDetailPage = ({ history }) => {
  const [movie, setMovie] = useState({});
  const [imageSrc, setimageSrc] = useState(get(movie, 'show.image.medium', ''));
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { state } = useLocation();

  const setNoImage = () =>
    setimageSrc(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-v4jOj16on3P9tXP7kBf7WBlPgd3pOXJJlcbtN217wSmbi4X&s',
    );

  useEffect(() => {
    if (get(state, 'movie')) {
      setMovie(state.movie);
    } else {
      history.push('/');
    }
  }, [state, history]);

  useEffect(() => {
    setimageSrc(get(movie, 'show.image.medium', ''));
    return () => {
      setimageSrc('');
    };
  }, [movie]);

  return (
    <div className="movie-detail-wrapper">
      {!isImageLoaded && <ImageLoader />}

      <img
        alt={get(movie, 'show.image.medium', '')}
        src={imageSrc}
        className="movie-detail-img"
        onError={setNoImage}
        onLoad={() => setIsImageLoaded(true)}
      />
      <div>{parse(get(movie, 'show.summary', ''))}</div>
    </div>
  );
};

MovieDetailPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieDetailPage);
