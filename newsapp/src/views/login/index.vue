<template>
  <div>
    <van-nav-bar class='login-nav-bar' title='登录' />
    <van-form @submit='onSubmit'>
      <van-field
        v-model='user.mobile'
        required
        clearable
        label='手机号'
        placeholder='请输入手机号'
        type='text'
      >
        <i slot='left-icon' class='iconfont iconshouji'></i>
      </van-field>
      <!-- 输入密码 -->
      <van-field v-model='user.code' type='number' label='验证码' placeholder='请输入验证码' required>
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
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        message: '登录中……',
        duration: 0,
        forbidClick: true
      })
      // 请求登录
      try {
        const { data } = await login(this.user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('验证码或者密码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
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
