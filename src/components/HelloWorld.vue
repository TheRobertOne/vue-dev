<template>
    <div class="hello">
    <selfButton @getStyle="setStyle" :fontSizeNum="fontSizeNum" key="1">放大</selfButton>
    <selfButton @getStyle="setStyle" :fontSizeNum="fontSizeNum" key="2">放大</selfButton>
    <selfButton @getStyle="setStyle" :fontSizeNum="fontSizeNum" key="3">放大</selfButton>
    <el-input v-model="num" @change="changeInput"  placeholder="请输入内容"></el-input>
    <el-button @click="addNum(num)">加</el-button>
    <el-button @click="loseNum(num)">减</el-button>
    <div>{{count}}</div>
  </div>
</template>

<script>

import selfButton from './selfButton'
import {mapState, mapActions} from 'vuex'

export default {
  name: "HelloWorld",
  components: {
    selfButton
  },
  data () {
    return {
      fontSizeNum: 16
    }
  },
  computed: mapState({
    num: state => state.num,
    count: state => state.count+1
  }),
  methods: {
    setStyle(num) {
      this.fontSizeNum += num
    },
    ...mapActions([
      'addNum', 'loseNum'
    ]),
    changeInput() {
      console.log(123)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
