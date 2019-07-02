<!--
  - Created by Eunjin Yang on 7/2/19 10:31 AM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <header class="header">
    <div class="layout header-layout">
      <h1 class="header__logo"><a href="/"><img src="../../assets/images/common/netflix_logo.svg" alt="Netflix" width="92" height="25"></a></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header-layout {
    display: flex;
    align-items: center;
    height: 3rem;
  }
</style>
