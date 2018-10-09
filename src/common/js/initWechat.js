import { getApiList } from "../../api/api";

function initWechat() {
  // 获取服务端微信配置信息

  getApiList().then(res => {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.app_id, // 必填，公众号的唯一标识
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonce_str, // 必填，生成签名的随机串
      signature: res.signature, // 必填，签名
      jsApiList: [
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "onMenuShareQZone",
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "onVoicePlayEnd",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "translateVoice",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "closeWindow",
        "scanQRCode",
        "chooseWXPay",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard"
      ] // 必填，需要使用的JS接口列表
    });
  });

  wx.error(function(res) {});
}

export default initWechat;
