import { fetchNews, fetchAsk, fetchJobs, fetchAskDetail, fetchUserInfo, fetchListItem, fetchListList } from '../api/index';

export default {
  FETCH_NEWS_ITEM(context) {
    fetchNews()
      .then(({ data }) => {
        context.commit('SET_NEWS_ITEM', data);
        return data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_ASK_ITEM({commit}){
    fetchAsk()
      .then((response) => {
        commit('SET_ASK_ITEM', response.data);
        return response;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_JOBS_ITEM({commit}){
    fetchJobs()
      .then((response) => {
        commit('SET_JOBS_ITEM', response.data);
        return response;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_ASK_DETAIL({commit}, id){
    fetchAskDetail(id)
      .then((response) => {
        commit('SET_ASK_DETAIL', response.data);
        return response;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
  FETCH_USER_INFO({commit}, id) {
    fetchUserInfo(id)
      .then((response) => {
        commit('SET_USER_INFO', response.data);
        return response;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  FETCH_LIST_ITEM({commit}, page) {
    fetchListItem(page)
      .then((response) => {
        commit('SET_LIST_ITEM', response.data);
        return response;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  FETCH_LIST_LIST({ commit }, pageName){
    fetchListList(pageName)
      .then((response) => {
        commit('SET_LIST_LIST', response.data);
        return response;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

  }}
