import axios from 'axios';
import get from 'lodash/get';

export const getMovie = () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=batman')
      .then(res => {
        resolve(get(res, 'data'));
      })
      .catch(error => {
        reject(error);
      });
  });
