import axios, {AxiosInstance} from 'axios';

export default class AxiosService {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {},
    timeout: 100000,
  });
}
