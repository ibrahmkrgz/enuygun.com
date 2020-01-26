import { createSelector } from 'reselect';

const getMovie = state => state.movie;

export const movieSelector = createSelector([getMovie], movie => movie && movie.data);

export const isLoadingSelector = createSelector([getMovie], movie => movie && movie.isLoading);

export const statusSelector = createSelector([getMovie], movie => movie && movie.status);
