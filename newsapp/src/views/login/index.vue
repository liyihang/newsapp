<template>
  <div>
    <van-nav-bar class='login-nav-bar' title='登录' />
    <van-form ref='loginForm' @submit='onSubmit'>
      <van-field
        v-model='user.mobile'
        required
        name='mobile'
        clearable
        label='手机号'
        placeholder='请输入手机号'
        type='text'
        max-length='11'
        :rules='userFormRule.mobile'
      >
        <i slot='left-icon' class='iconfont iconshouji'></i>
      </van-field>
      <!-- 输入密码 -->
      <van-field
        v-model='user.code'
        type='number'
        label='验证码'
        placeholder='请输入验证码'
        required
        max-length='6'
        :rules='userFormRule.code'
      >
        <i slot='left-icon' class='iconfont iconpassword'></i>
        <template #button>
          <van-count-down
            v-if='isCountDownShow'
            :time='1000 * 60'
            format='ss s'
            @finish='isCountDownShow = false'
          />
          <van-button v-else class='login-captcha' native-type='button' @click='sendCode'>验证码</van-button>
        </template>
      </van-field>
      <van-button class='login-submit' round block type='info' native-type='submit'>登录</van-button>
    </van-form>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'
export default {
  data() {
    return {
      isCountDownShow: false,
      user: {
        mobile: '13911111111',
        code: '246810',
      },
      userFormRule: {
        mobile: [
          {
            required: true,
            message: '手机号码不能为空',
          },
          {
            pattern: /^1[|3|5|7|8]\d{9}$/,
            message: '手机格式错误',
          },
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空',
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码为6位数字',
          },
        ],
      },
    }
  },
  methods: {
    async onSubmit() {
      this.$toast.loading({
        message: '登录中……',
        duration: 0,
        forbidClick: true,
      })
      // 请求登录
      try {
        const res = await login(this.user)
        this.$store.commit('setUser', res.data.data)
        // console.log(data.data)
        this.$toast.success('登录成功')
        this.$router.push('/my')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('验证码或者密码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    async sendCode() {
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('验证错误', err)
      }
      this.isCountDownShow = true
      try {
        await getSmsCode(this.user.mobile)
        this.$toast('发送成功……')
      } catch (err) {
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送数据太频繁，请稍后再试')
        } else {
          this.$toast('发送失败，请稍后再试')
        }
      }
    },
  },
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
