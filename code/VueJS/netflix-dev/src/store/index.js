/*
 * Created by Eunjin Yang on 7/4/19 5:43 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { fetchMovieList } from "../api";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    koreamovies: []
  },
  mutations: {
    SET_MOVIES(state, koreamovies) {
      state.koreamovies = koreamovies;
    }
  },
  actions: {
    FETCH_MOVIES(context) {
      fetchMovieList()
        .then(response => {
          console.log(response);
          //mutation에 데이터 넘길떄 commit() 필요
          context.commit('SET_MOVIES' , response.data);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
});
