<!--
  - Created by Eunjin Yang on 7/2/19 11:41 AM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <main class="main-content">
    <article class="main-billboard--special">
      <div class="special-image-area">
        <img src="../../assets/images/main/special_image.png" alt="" class="special__image">
        <div class="special-image-layer layer--top"></div>
        <div class="special-image-layer layer--bottom"></div>
      </div>
      <div class="special-text-area">
        <h1 class="special-text__subject">
          <img src="../../assets/images/main/special_subject.png" alt="아스달 연대기" class="subject-img">
        </h1>
        <div class="special-btn-area">
          <button class="special-btn special-btn--play">
            <font-awesome-icon icon="play" class="btn__icon"/>재생</button>
          <button class="special-btn special-btn--zzim">
            <font-awesome-icon icon="plus" class="btn__icon"/>내가 찜한 콘텐츠
          </button>
        </div>
        <strong class="special-text__description special-text__description--important">매주 토요일 새로운 에피소드 공개</strong>
        <p class="special-text__description">
          그곳에서 모든 것이 시작됐다. 태고의 땅 아스. 권력을 향한 욕망, 새로운 사회에 대한 열망, 그리고 가슴 뛰는 사랑을 위해 치열하게 살아간 사람들이 있었다.
        </p>
      </div>
    </article>
    <div class="main-billboard--card">
      <h2 class="card-category__title">Netflix 인기 콘텐츠</h2>
      <carousel :per-page="5" :mouse-drag="true" class="card-slide">
        <article class="card-slide__item">
          <router-link to="/" class="card__item">
            <div class="card-thumbnail-area">
              <img src="../../assets/images/main/card_thumbnail_01.png" alt="" class="card-thumbnail__img">
            </div>
            <div class="card-text-area">
              <button><font-awesome-icon icon="play" class="btn__icon"/></button>
              <h1 class="card__subject">지정생존자</h1>
              <ul class="card-category">
                <li>스릴러</li>
              </ul>
            </div>
          </router-link>
        </article>
      </carousel>
    </div>
    <div class="main-billboard--card"></div>
  </main>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'

library.add(faPlay, faPlus)

export default {
  name: 'Main',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    Carousel,
    Slide
  },
  data () {
    return {
      info: null
    }
  },
  methods: {
  },
  created () {
    axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=89378ac880b8d6a28264d20920bdf5f2')
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style scoped lang="scss">
  .main-content {
    position: relative;
    margin-top: -70px;
    width: 100%;
    height: 100%;
  }
  /*풀스크린영역*/
  .main-billboard--special {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column-reverse;
    @include clearfix;
    .special-image-area {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      .special__image {
        width: 100%;
        max-height: 1432px;
      }
      .special-image-layer {
        &.layer--bottom {
          background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(20,20,20,0)),color-stop(15%,rgba(20,20,20,.15)),color-stop(29%,rgba(20,20,20,.35)),color-stop(44%,rgba(20,20,20,.58)),color-stop(68%,#141414),to(#141414));
          background-image: -webkit-linear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
          background-image: -moz- oldlinear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
          background-image: -o-linear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
          background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
          -webkit-background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          -o-background-size: 100% 100%;
          background-size: 100% 100%;
          background-position: 0 top;
          background-repeat: repeat-x;
          background-color: transparent;
          width: 100%;
          height: 20vw;
          position: absolute;
          left: 0;
          right: 0;
          top: auto;
          bottom: -4vw;
        }
        &.layer--top {
          background-image: -webkit-gradient(linear,left top,left bottom,from(#141414),to(rgba(20,20,20,0)));
          background-image: -webkit-linear-gradient(top,#141414 0,rgba(20,20,20,0) 100%);
          background-image: -moz- oldlinear-gradient(top,#141414 0,rgba(20,20,20,0) 100%);
          background-image: -o-linear-gradient(top,#141414 0,rgba(20,20,20,0) 100%);
          background-image: linear-gradient(to bottom,#141414 0,rgba(20,20,20,0) 100%);
          -webkit-background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          -o-background-size: 100% 100%;
          background-size: 100% 100%;
          background-position: 0 top;
          background-repeat: repeat-x;
          background-color: transparent;
          width: 100%;
          height: 12.8vw;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          opacity: .65;
        }
      }
    }
    /*텍스트부분*/
    .special-text-area {
      position: absolute;
      top: 19vh;
      left: 4vw;
      width: 36%;
      .special-text__subject {
        .subject-img {
          width: 90%;
        }
      }
    }
    .special-btn {
      padding: .75rem 2.3em;
      /*height: 1.2vh;*/
      margin-top: 2rem;
      margin-bottom: 2rem;
      -webkit-border-radius: .2vw;
      -moz-border-radius: .2vw;
      border-radius: .2vw;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-size: 1.1vw;
      font-weight: 700;
      background: rgba(51,51,51,.4);
      color: $white;
      border: 0;
      text-transform: none;
      transition: transform .2s;
      &.special-btn--zzim {
        margin-left: 15px;
      }
      .btn__icon {
        margin-right: 15px;
      }
      &:hover,
      &:focus {
        background: $white;
        color: $black;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.3);
        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.3);
        box-shadow: 0 1px 2px rgba(0,0,0,.3);
        &.special-btn--play {
          transform: scale(1.05);
        }
      }
    }
    .special-text__description {
      color: $white;
      font-size: 1.4vw;
      line-height: 1.4;
      word-break: keep-all;
    }
    .special-text__description--important {
      font-size: 1.6vw;
    }
  }

/*  카드영역*/
  .main-billboard--card {
    margin-top: 3vh;
    margin-bottom: 3vh;
    position: relative;
    .card-category__title {
      color: $white;
      padding-left: 60px;
      margin-bottom: 1vh;
      font-size: 1.4vw;
    }
    .card-slide {
      padding: 0 60px;
    }
    .card-slide__item {
      transition: transform 3s;
      /*width: 16.66666667%;*/
      margin-right: .25vw;
      min-width: 13vw;
      color: $white;
      background: yellow;
      .card-thumbnail-area {
        position: relative;
        padding: 28% 0;
        overflow: hidden;
        .card-thumbnail__img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .card-text-area {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        padding: .5vh;
        background: rgba(51,51,51,.4);
      }
      .card__item {
        transition: transform 3s;
        display: block;
        position: relative;
        &:hover,
        &:focus {
          width: 400px;
          .card-thumbnail-area {
          }
          .card-text-area {
            opacity: 1;

          }
        }
      }
    }
  }
</style>
