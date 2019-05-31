/*
 * Created by Eunjin Yang on 5/31/19 3:03 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */

import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHROIZED = 401
const onUnauthrorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHROIZED) return onUnauthrorized()
      throw Error(result)
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

const {token} = localStorage
if (token) setAuthInHeader(token)

export const board = {
  fetch() {
    return request('get', '/boards')
  }
}

export const auth = {
  login(email,password) {
    return request('post','/login',{email, password})
  }
}
