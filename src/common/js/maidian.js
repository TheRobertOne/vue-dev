// 埋点

function maidian() {
  var _mtac = { senseQuery: 1 };
  var mta = document.createElement("script");
  mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
  mta.setAttribute("name", "MTAH5");
  mta.setAttribute("sid", "500643785");
  mta.setAttribute("cid", "500643787");
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(mta, s);
}

export default maidian;
