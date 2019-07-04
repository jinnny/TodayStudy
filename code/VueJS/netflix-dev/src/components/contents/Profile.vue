<!--
  - Created by Eunjin Yang on 7/2/19 12:14 PM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->
<template>
  <main class="profile-area">
    <Header/>
    <article class="profile-content">
      <h1 class="profile__title">Netflix를 시청할 프로필을 선택하세요.</h1>
      <ul class="choose-profile-list">
        <li class="profile" v-for="(member,i) in memberJson.members" :key="i" :index="i">
          <router-link to="/">
            <div class="profile__avatar" :style="{'background-image': 'url('+ require('../../assets/images/profile/'+ member.avatar)+')'}"></div>
            <strong class="profile__name">{{member.name}}</strong>
          </router-link>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
import Header from '../layout/Header'
import json from '../../member.json'

export default {
  name: 'Profile',
  components: {
    Header
  },
  data () {
    return {
      memberJson: json,
      current: this.$route.params.index
    }
  }
}
</script>

<style scoped lang="scss">
  .profile-content {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .profile__title {
    color: $white;
    font-weight: 400;
    font-size: 3.5vw;
  }
  .choose-profile-list {
    display: flex;
    justify-content: space-between;
    margin-top: 3vh;
    .profile {
      width: 10vw;
      max-width: 200px;
      min-width: 84px;
      text-align: center;
      margin-right: 1vw;
      .profile__avatar {
        width: 10vw;
        height: 10vw;
        max-height: 200px;
        max-width: 200px;
        border: .25vw solid transparent;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .profile__name {
        display: block;
        font-weight: 200;
        opacity: .5;
        margin-top: 2vh;
        font-size: 24px;
      }
      &:hover,
      &:focus {
        .profile__avatar {
          border: .25vw solid $white;
        }
        .profile__name {
          opacity: 1;
        }
      }
    }
  }

</style>
