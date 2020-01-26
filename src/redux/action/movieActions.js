import { SET_MOVIE_DATA, SET_MOVIE_DATA_FAIL, SET_IS_LOADING } from '../constants/reduxConstants';

import { getMovie } from '../../api/providers/external';

export const movieData = () => dispatch => {
  setIsLoading(dispatch, true);

  getMovie()
    .then(movie => {
      dispatch({
        type: SET_MOVIE_DATA,
        payload: { movie },
      });
    })
    .catch(error => {
      dispatch({
        type: SET_MOVIE_DATA_FAIL,
        payload: { ...error },
      });
    });
};

export const setMovieData = data => ({
  type: SET_MOVIE_DATA,
  payload: data,
});

export const setMovieDataFail = data => ({
  type: SET_MOVIE_DATA_FAIL,
  payload: data,
});

export const setIsLoading = (dispatch, data) => {
  dispatch({
    type: SET_IS_LOADING,
    payload: data,
  });
};
