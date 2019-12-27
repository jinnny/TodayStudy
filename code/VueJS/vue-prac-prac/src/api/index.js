import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetchNews() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAsk() {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobs() {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}


export {
  fetchNews,
  fetchAsk,
  fetchJobs
}
