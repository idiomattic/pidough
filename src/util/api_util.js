import axios from 'axios';
import environment from '../env.js';

const ApiUtil = axios.create({
  baseURL: environment.BASE_URL,
  responseType: 'json'
});

export default ApiUtil;