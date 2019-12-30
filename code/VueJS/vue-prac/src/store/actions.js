import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchAskItem, fetchList } from "../api";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },
  //async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },

  //promise
  // FETCH_JOBS(context) {
  //   return fetchJobsList()
  //     .then(({ data}) => {
  //       context.commit('SET_JOBS', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },

  // async
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }

  },

  // promise
  // FETCH_ASK(context) {
  //   return fetchAskList()
  //     .then(response => {
  //       context.commit('SET_ASK', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },

  //async
  async FETCH_ASK(context) {
    try {
      const response = await fetchAskList();
      context.commit('SET_ASK', response.data);
      return response;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },

  //promise
  // FETCH_USER_INFO({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(response => {
  //       commit('SET_USER_INFO', response.data)
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },

  //async
  async FETCH_USER_INFO({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER_INFO', response.data);
    return response;
  },

  //promise
  // FETCH_ASK_ITEM({ commit }, id){
  //   return fetchAskItem(id)
  //     .then(response => {
  //       commit('SET_ASK_ITEM', response.data)
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },

  //async
  async FETCH_ASK_ITEM({ commit }, id){
    const response = await fetchAskItem(id);
    commit('SET_ASK_ITEM', response.data);
    return response;
  },

  //promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit('SET_LIST', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // },

  //async
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}
