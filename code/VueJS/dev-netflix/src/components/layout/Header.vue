<!--
  - Created by Eunjin Yang on 7/2/19 10:31 AM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <header class="header">
    <div class="layout header-layout">
      <h1 class="header__logo"><a href="/"><img src="../../assets/images/common/netflix_logo.svg" alt="Netflix" width="92" height="25"></a></h1>
      <!--메뉴가 있는 경우만 노출-->
      <div class="header-menu-area" v-if="$route.meta.plainLayout">
        <!--상단메뉴-->
        <nav class="header__menu">
          <router-link to="/" class="menu__item">홈</router-link>
          <router-link to="/" class="menu__item">TV 프로그램</router-link>
          <router-link to="/" class="menu__item">영화</router-link>
          <router-link to="/" class="menu__item">최신 등록 콘텐츠</router-link>
          <router-link to="/" class="menu__item">내가 찜한 콘텐츠</router-link>
        </nav>
        <!--상단메뉴-->
        <!--검색,알림,회원메뉴-->
        <div class="header__sub-menu">
          <div class="header__search-area"></div>
          <div class="header__alert-area"></div>
          <div class="header__member-area"></div>
        </div>
        <!--검색,알림,회원메뉴-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    z-index: 1;
  }
  .header-layout {
    display: flex;
    align-items: center;
    height: 70px;
  }
  .header__logo {
    margin-right: 20px;
  }
  .header__menu {
    .menu__item {
      font-size: 14px;
      display: inline-block;
      margin-left: 20px;
      opacity: .6;
      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
</style>
