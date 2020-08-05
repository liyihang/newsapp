<template>
  <div class='layout-container'>
    <router-view></router-view>

    <van-tabbar v-model='active'>
      <van-tabbar-item to="/">
        <i slot='icon' class='iconfont iconshouye'></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video"> 
        <i slot='icon' class='iconfont iconshipin'></i>
        <span>视屏</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot='icon' class='iconfont iconwode'></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
