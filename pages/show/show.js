let WxParse = require('../../dist/wxParse/wxParse.js');
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
                WxParse.wxParse('content', 'md', that.data.md, that);
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