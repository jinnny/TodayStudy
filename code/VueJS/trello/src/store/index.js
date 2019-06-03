/*
 * Created by Eunjin Yang on 6/3/19 12:24 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false
  },
  mutations: {
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    }
  },
  actions: {
    ADD_BOARD(_, {title}) {
      return api.board.create(title)
    }
  }
})

export default store
