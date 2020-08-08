<template>
  <div class='my-container'>
    <div class='header'>
      <img class='mobile-img' src='~@/assets/mobile.png' @click="$router.push('/login')" />
        <span>登录/注册</span>
    </div>
    <div class='grid-nav'>
      <div>
        <i slot='icon' class='iconfont iconshoucang'></i>
        <p>收藏</p>
      </div>
      <div>
        <i slot='icon' class='iconfont iconlishi'></i>
        <p>历史</p>
      </div>
    </div>
    <van-cell title='消息通知' is-link url />
    <van-cell title='实名认证' is-link url />
    <van-cell title='用户反馈' is-link url />
    <van-cell title='小智同学' is-link url />
    <van-cell title='系统设置' is-link url />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.my-container{
  .header{
    height: 360px;
    background: url('~@/assets/banner.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-mobile{
      height: 132px;
      width: 132px;
    }
    span{
      position: absolute;
      margin-top: 40%;
      font-size: 15px;
    }
  }
  .grid-nav>div{
    float: left;
    flex-direction: column;
    font-size: 10px;
    padding: 8px;
    margin-left: 25%;
    .iconfont{
      color: #ff9d1d;
    }
  }
}
</style>
