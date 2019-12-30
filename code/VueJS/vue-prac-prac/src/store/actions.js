import { fetchNews, fetchAsk, fetchJobs, fetchAskDetail, fetchUserInfo } from '../api/index';

export default {
  FETCH_NEWS_ITEM(context) {
    fetchNews()
      .then(({ data }) => {
        context.commit('SET_NEWS_ITEM', data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_ASK_ITEM({commit}){
    fetchAsk()
      .then(({ data }) => {
        commit('SET_ASK_ITEM', data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_JOBS_ITEM({commit}){
    fetchJobs()
      .then(({data}) => {
        commit('SET_JOBS_ITEM', data)
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_ASK_DETAIL({commit}, id){
    fetchAskDetail(id)
      .then(({data}) => {
        commit('SET_ASK_DETAIL', data)
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_USER_INFO({commit}, id) {
    fetchUserInfo(id)
      .then(({data}) => {
        commit('SET_USER_INFO', data)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}
