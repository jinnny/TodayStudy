/*
 * Created by Eunjin Yang on 7/4/19 4:32 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */
import axios from 'axios'

// 1. HTTP Request & Response 기본 설정
const config = {
  baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/'
};

// 2. API 함수 정리
function fetchMovieList() {
  // return axios.get(config.baseUrl +'?sort_by=like_count');
  return axios.get(`${config.baseUrl}searchMovieList.json?key=89378ac880b8d6a28264d20920bdf5f2`);
}


export {
  fetchMovieList
}
