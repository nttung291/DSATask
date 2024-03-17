import { HttpClient } from './service-layer/https-layer';
import { get as _get } from 'lodash';
import { Movie } from '../types/movie';

const httpsClient = HttpClient.getInstance();

export const getWeekTop10Movies = async (): Promise<Movie[]> => {
  return new Promise((resolve, reject) => {
    httpsClient
      .get('getWeekTop10')
      .then(response => {
        const movies = _get(response, 'data.data', []);
        resolve(movies);
      })
      .catch(error => {
        reject(error);
      });
  });
};
