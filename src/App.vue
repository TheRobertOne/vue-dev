<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">主页</router-link> |-->
      <!--<router-link to="/course_url_search">课件信息查询</router-link>-->
    <!--</div>-->
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">主页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/course_url_search">订单管理</router-link>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
