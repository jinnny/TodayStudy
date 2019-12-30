import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들 정리
async function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  }catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}


async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`)
  }catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`)
  }catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

}

function fetchAskItem(id){
  return axios.get(`${config.baseUrl}item/${id}.json`)
}


export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskItem,
  fetchList
}
