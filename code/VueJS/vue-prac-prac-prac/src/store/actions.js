import { fetchList, fetchUser, fetchAskDetail } from '../api';

export default {
  async FETCH_LIST({ commit }, pageName) {
    const response =  await fetchList(pageName)
      commit('SET_LIST', response.data);
    return response
      // .then((response)=> {
      //   commit('SET_LIST', response.data);
      //   return response;
      // })
      // .catch(e => {
      //   // eslint-disable-next-line no-console
      //   console.log(e);
      // })
  },

  async FETCH_USER({ commit }, id) {
    const response = await fetchUser(id)
    commit('SET_USER', response.data);
    return response
      // .then((response) => {
      //
      // })
      // .catch(e => {
      //   // eslint-disable-next-line no-console
      //   console.log(e);
      // })
  },

  async FETCH_ITEM({ commit }, id) {
    const response = await fetchAskDetail(id)
    commit('SET_ITEM', response.data);
    return response
      // .then((response) => {
      //   commit('SET_ITEM', response.data);
      //   return response
      // })
      // .catch(e => {
      //   // eslint-disable-next-line no-console
      //   console.log(e)
      // })
  }
}
