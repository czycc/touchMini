let wemark = require('../../dist/wemark/wemark');
let app = getApp();
Page({
    data: {
        wemark: {},
        md: null,
        article: null,
    },

    onLoad: function (params) {
        let that = this;
        console.log(params.id)
        wx.request({
            url: app.globalData.baseUrl + 'api/articles/'+params.id,
            method: 'GET',
            success: function (res) {
                console.log(res);
                that.setData({
                    md: res.data.article.content,
                    article: res.data.article
                })
                console.log(that.data.md)
                wemark.parse(that.data.md, that, {
                    // 新版小程序可自适应宽高
                    // imageWidth: wx.getSystemInfoSync().windowWidth - 40,
                    name: 'wemark'
                })
            }
        })
    },
    onReady: function(){
        console.log(this.data)
    },
    onShareAppMessage: function (option) {
        let that = this;
        return {
            title: that.data.article.title,
            path: '/page/show/show?id='+that.data.article.id
          }
    }
})