<template>
    <div class="about">
        <h1>This is an search table</h1>
        <el-select v-model="selectValue" placeholder="请选择" @change="selectChange">
            <el-option
                key="1"
                label="stage1"
                value="1">
            </el-option>
            <el-option
                    key="2"
                    label="stage2"
                    value="2">
            </el-option>
            <el-option
                    key="4"
                    label="stage4"
                    value="4">
            </el-option>
            <el-option
                    key="7"
                    label="stage7"
                    value="7">
            </el-option>
        </el-select>
        <!--<el-input class="input" v-model="search_condition.slide_url" placeholder="课程id"></el-input>-->
        <!--<el-button icon="el-icon-search" circle @click="search"></el-button>-->
        <div style="padding: 20px;">
            <el-table :data="tableData" style="width: 100%;margin-top: 10px" v-loading="loading" border>
                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="name"
                        width="400">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="url"
                        sortable>
                    <template slot-scope="scope">
                        <a :href="scope.row.url.replace('index', 'debug')" target="_blank">{{scope.row.url}}</a>
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
        name: "libu",
        data() {
            return {
                selectValue: '',
                tableData: [],
                tableData1: [],
                tableData2: [],
                tableData3: [],
                tableData4: [],
                search_condition: {
                    s_course: ''
                },
                loading: false,
                courseIdList1: [677, 357, 685, 571, 576, 542, 1112, 641, 661, 669, 656, 1136, 712, 594, 636, 949, 617, 717, 714, 1124, 1089, 459, 470, 492, 504, 508, 520, 527, 692, 532, 722, 1131, 799, 814, 1137, 826, 824, 857, 881, 898, 952, 958, 974, 987, 1007, 1013, 1071, 1025, 1040, 1055, 1060, 1065],
                courseIdList2: [1139, 716, 741, 755, 1128, 1129, 626, 1135, 1134, 829, 827, 859, 887, 902, 1010, 1026, 1034, 959, 1061, 1069, 1070, 960, 1075, 971, 964, 940, 951, 1090, 1006, 1092, 923, 1079, 1093, 1098, 1097, 1099, 1100, 1102, 1103, 1110, 1104, 1107, 1108, 1109, 1113, 1111, 1115, 1116, 1123, 1117, 1118, 1125],
                courseIdList3: [694, 757, 559, 1038, 1078, 721, 597, 671, 1122, 420, 1119, 1105, 679, 639, 649, 644, 658, 580, 665, 1126, 529, 993, 1001, 1130, 475, 573, 611, 437, 544, 522, 511, 950, 937, 810, 835, 830, 861, 883, 904, 927, 942, 961, 977, 986, 1012, 1008, 1022, 1042, 1067, 1059, 1064, 1073],
                courseIdList4: [635, 734, 1120, 1123, 1121, 681, 1106, 1114, 582, 651, 560, 725, 1127, 588, 646, 666, 660, 598, 572, 429, 415, 948, 545, 461, 442, 992, 1000, 500, 1076, 525, 530, 864, 1133, 1132, 836, 832, 863, 886, 899, 920, 939, 965, 969, 984, 1004, 1014, 1032, 1066, 1054, 1045, 1062, 1072]
            }
        },
        created: function () {
            const that = this;
            // this.loading = true;
            var dataArray1 = [];
            var dataArray2 = [];
            var dataArray3 = [];
            var dataArray4 = [];
            for (var i = 0; i < that.courseIdList1.length;i++) {
                axios.get(`https://realtime-lmsvr.abctime.com/mobileapi/v4/ibl/course/list?s_course=${that.courseIdList1[i]}`)
                .then(function (res) {
                    if(res['data']['data'].length > 1) {
                        console.log(1234, that.search_condition)
                    }
                    dataArray1.push({'url': res['data']['data'][0]['resource_url'], 'name': res['data']['data'][0]['course_name']})
                })
            }
            for (var i = 0; i < that.courseIdList2.length;i++) {
                axios.get(`https://realtime-lmsvr.abctime.com/mobileapi/v4/ibl/course/list?s_course=${that.courseIdList2[i]}`)
                .then(function (res) {
                    if(res['data']['data'].length > 1) {
                        console.log(1234, that.search_condition)
                    }
                    dataArray2.push({'url': res['data']['data'][0]['resource_url'], 'name': res['data']['data'][0]['course_name']})
                })
            }
            for (var i = 0; i < that.courseIdList3.length;i++) {
                axios.get(`https://realtime-lmsvr.abctime.com/mobileapi/v4/ibl/course/list?s_course=${that.courseIdList3[i]}`)
                .then(function (res) {
                    if(res['data']['data'].length > 1) {
                        console.log(1234, that.search_condition)
                    }
                    dataArray3.push({'url': res['data']['data'][0]['resource_url'], 'name': res['data']['data'][0]['course_name']})
                })
            }
            for (var i = 0; i < that.courseIdList4.length;i++) {
                axios.get(`https://realtime-lmsvr.abctime.com/mobileapi/v4/ibl/course/list?s_course=${that.courseIdList4[i]}`)
                .then(function (res) {
                    if(res['data']['data'].length > 1) {
                        console.log(1234, that.search_condition)
                    }
                    dataArray4.push({'url': res['data']['data'][0]['resource_url'], 'name': res['data']['data'][0]['course_name']})
                })
            }
            that.tableData1 = dataArray1
            that.tableData2 = dataArray2
            that.tableData3 = dataArray3
            that.tableData4 = dataArray4
            // that.setData({
            //     tableData1: dataArray1,
            //     tableData2: dataArray2,
            //     tableData3: dataArray3,
            //     tableData4: dataArray4
            // })
        },
        methods: {
            search() {
                const that = this;
                // this.loading = true;
                axios.get('https://realtime-lmsvr.abctime.com/mobileapi/v4/ibl/course/list', {
                    params: that.search_condition
                }).then(function (res) {
                    that.tableData = [{'url': res['data']['data'][0]['resource_url'], 'name': res['data']['data'][0]['course_name']}]
                })
            },
            selectChange(value) {
                const that = this;
                if (value === '1') {
                    that.tableData = that.tableData1
                } else if (value === '2'){
                    that.tableData = that.tableData2
                } else if (value === '4') {
                    that.tableData = that.tableData3
                } else if (value === '7') {
                    that.tableData = that.tableData4
                }
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
