// // 上传录音
// export const fetchRecordId = serverId => {
//     return axios.get(`/h5/save/media?id=${serverId}`);
//   };
  
//   // 上传姓名和录音绑定
//   export const fetchInfo = params => {
//     return axios.post(`/h5/save/params`, params);
//   }
  
//   // 获取用户信息
//   export const getInfo = uid => {
//     return axios.get(`/h5/save/params?uid=${uid}`);
//   }
  
//   // 获取API列表
//   export const getApiList = params => {
//     return axios.get(`/h5/api/jssdk?url=`+encodeURIComponent(location.href.split('#')[0]),{});
//   };