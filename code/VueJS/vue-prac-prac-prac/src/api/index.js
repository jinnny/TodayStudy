import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetchList (pageName) {
  try {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

function fetchUser (id) {
  try {
    return axios.get(`${config.baseUrl}user/${id}.json`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

}

function fetchAskDetail (id) {
  try {
    return axios.get(`${config.baseUrl}item/${id}.json`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export {
  fetchList,
  fetchUser,
  fetchAskDetail
}
