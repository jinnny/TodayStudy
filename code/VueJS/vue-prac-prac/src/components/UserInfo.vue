<template>
  <article>
    <h1 class="user-info__name">
      <slot name="userName">
<!--        Name: {{ userInfoItem.user }}-->
      </slot>
    </h1>
    <p class="user-info__join">
      <slot name="userJoin"></slot>
    </p>
    <p>
      <slot name="userKarma"></slot>
    </p>
  </article>
</template>

<script>
  export default {
    name: "UserInfo",
    props: {
      userInfoItem: Object
    }
  }
</script>

<style scoped>

</style>
