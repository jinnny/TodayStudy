import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchAskItem} from "../api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(({ data}) => {
        context.commit('SET_JOBS', data)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  FETCH_USER_INFO({ commit }, name) {
    fetchUserInfo(name)
      .then(response => {
        commit('SET_USER_INFO', response.data)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },

  FETCH_ASK_ITEM({ commit }, id){
    fetchAskItem(id)
      .then(response => {
        commit('SET_ASK_ITEM', response.data)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}
