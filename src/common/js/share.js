function share(params = {}) {
  wx.ready(function () {
    if (params.hasOwnProperty('name')) {
      wx.onMenuShareTimeline({//分享到朋友圈
        title: `我家${params.name}有一份中秋祝福送给你，快来领取！`, // 分享标题
        link: 'https://' + document.domain + `/h5/weixin/zqhd/index.html#/opc?sex=${params.sex}&uid=${params.uid}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://courses.abctime.com/abcTime-h5/wechat/img/zhongqiu/shareIcon.png', // 分享图标
        success: function (res) {
          MtaH5.clickStat("jgyfx")
          // 用户确认分享后执行的回调函数
        }
      });

      wx.onMenuShareAppMessage({
        title: `我家${params.name}有一份中秋祝福送给你，快来领取！`, // 分享标题
        desc: '常春藤外教带宝宝送祝福，这个中秋不一样。', // 分享描述
        link: 'https://' + document.domain + `/h5/weixin/zqhd/index.html#/opc?sex=${params.sex}&uid=${params.uid}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://courses.abctime.com/abcTime-h5/wechat/img/zhongqiu/shareIcon.png', // 分享图标
        success: function (res) {
          MtaH5.clickStat("jgyfx")
          console.log(res)
        },
        cancel: function (res) {
          console.log(res)
        }
      });
    } else {
      wx.onMenuShareTimeline({//分享到朋友圈
        title: "我的中秋贺卡会说话！常春藤外教带宝宝送祝福", // 分享标题
        link: 'https://' + document.domain + '/h5/weixin/zqhd/index.html#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://courses.abctime.com/abcTime-h5/wechat/img/zhongqiu/shareIcon.png', // 分享图标
        success: function (res) {
          MtaH5.clickStat("qtfx")
          console.log(res)
          // 用户确认分享后执行的回调函数
        }
      })

      wx.onMenuShareAppMessage({
        title: '我的中秋贺卡会说话！常春藤外教带宝宝送祝福', // 分享标题
        desc: '一起说月更圆，给宝宝不一样的中秋节！', // 分享描述
        link: 'https://' + document.domain + '/h5/weixin/zqhd/index.html#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://courses.abctime.com/abcTime-h5/wechat/img/zhongqiu/shareIcon.png', // 分享图标
        success: function(res) {
          MtaH5.clickStat("qtfx")
          console.log(res);
        },
        cancel: function(res) {
          console.log(res);
        }
      });
    }
  });
  wx.error(function(res) {});
}

export default share;
