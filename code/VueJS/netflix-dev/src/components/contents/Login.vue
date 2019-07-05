<template>
  <div class="login-area">
    <div class="login-bg">
<!--      <img src="../../assets/images/login/login_bg.jpg" alt="">-->
    </div>
    <article class="login">
      <div class="login-logo-area">
        <a href="/" class="login__logo"><img src="../../assets/images/common/netflix_logo.svg" alt="Netflix" width="180" height=""></a>
      </div>
      <div class="login-content-area">
        <h1 class="login__title">로그인</h1>
        <form action="">
          <div class="login-input-area">
            <label for="username" class="login__label">이메일 주소 또는 전화번호</label>
            <input class="login__input" id="username" v-model="id" type="text" placeholder="이메일 주소 또는 전화번호">
          </div>
          <div class="login-input-area">
            <label for="userpassword" class="login__label">비밀번호</label>
            <input class="login__input" id="userpassword" v-model="password" type="password" placeholder="비밀번호">
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        id: '',
        password: ''
      }
    }
  }
</script>

<style scoped lang="scss">
.login-area {
  /*background: url("../../assets/images/login/login_bg.jpg") no-repeat 100% 0;*/
  width: 100%;
}
.login-bg {
  width: 100%;
  height: 100vh;
  background: #000000 url("../../assets/images/login/login_bg.jpg") no-repeat 100% 0;
  background-size: cover;
  opacity: .5
}
.login {
  display: flex;
  justify-content: center;
}
  .login-logo-area {
    position: absolute;
    top: 1.8rem;
    left: 4rem;
  }
  .login-content-area {
    min-width: 340px;
    min-height: 600px;
    width: 20vw;
    height: 40vh;
    margin-top: -80vh;
    background: rgba(0,0,0,.8);
    position: relative;
    padding: 60px;
    .login__label,
    .login__title {
      color: $white;
    }
    .login__title {
      font-size: 32px;
    }
  }
</style>
