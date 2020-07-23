<template>
  <div>
    <van-nav-bar class='login-nav-bar' title='登录' />
    <van-form @submit='onSubmit'>
      <van-field v-model='user.mobile' type='text' label>
        <i slot='left-icon' class='iconfont iconshouji'></i>
      </van-field>
      <!-- 输入密码 -->
      <van-field v-model='user.code' type='number' label>
        <i slot='left-icon' class='iconfont iconpassword'></i>
        <template #button>
          <van-button class='login-captcha' type='default'>验证码</van-button>
        </template>
      </van-field>
      <van-button class='login-submit' round block type='info' native-type='submit'>登录</van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit', this.user.code)
    }
  }
}
</script>

<style>
.login-submit {
  margin-top: 150px;
}
.login-captcha {
  height: 0.64rem;
  background-color: #1abc9c;
}
</style>
