import get from 'lodash/get';
import { SET_MOVIE_DATA, SET_MOVIE_DATA_FAIL, SET_IS_LOADING } from '../constants/reduxConstants';

const initialState = {
  status: '',
  data: [],
  isLoading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_DATA: {
      const { movie } = action.payload;

      return {
        ...state,
        data: movie,
        isLoading: false,
      };
    }

    case SET_MOVIE_DATA_FAIL:
      const { response } = action.payload;
      return {
        ...state,
        status: get(response, 'data.message', ''),
        isLoading: false,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
