<template>
  <div class="about">
    <h1>This is an search table</h1>
    <el-select
      v-model="search_condition.id"
      filterable
      @change="subjectChange"
      placeholder="请选择课件类型">
      <el-option
        v-for="item in subjectList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-input class="input" v-model="search_condition.slide_url" placeholder="搜索关键字"></el-input>
    <el-button icon="el-icon-search" circle @click="search"></el-button>
    <div style="padding: 20px;">
      <el-table :data="tableData" style="width: 100%;margin-top: 10px" v-loading="loading" border>
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
          prop="id"
          label="课程ID"
          sortable>
        </el-table-column>
        <el-table-column
          prop="slide_url"
          label="课件地址">
        </el-table-column>
        <el-table-column
          prop="created_time"
          label="创建时间"
          sortable>
        </el-table-column>
        <el-table-column
          prop="cover"
          label="课程封面">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="width: 100%;" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import share from "@/common/js/share";
// share();
import axios from "../common/js/axios";

export default {
  name: "course_url_search",
    data() {
      return {
          tableData: [],
          subjectList: [],
          search_condition: {
              id: '',
              slide_url: ''
          },
          loading: false
      }
    },
  created: function() {
    const that = this;
    this.loading = true;
    axios.get('http://192.168.30.245:7766/subject')
      .then(function(res) {
        that.subjectList = res;
          // this.search()
          that.loading = false;
      })
  },
    methods: {
      search() {
          const that = this;
          this.loading = true;
          axios.get('http://192.168.30.245:7766/reg', {
              params: that.search_condition
          }).then(function(res) {
              that.tableData = res.date;
              that.loading = false;
          })
      },
      subjectChange(value) {
          this.search_condition.id = value;
      }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .input {
    width: 250px;
    margin-right: 10px;
  }
</style>
