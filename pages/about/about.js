// pages/about/about.js
let wemark = require('../../dist/wemark/wemark');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone: '',
      top_img: '',
      intro: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this;
      wx.request({
          url: app.globalData.baseUrl + '/api/about',
          method: 'GET',
          success: function (res) {
              that.setData({
                  phone: res.data.phone,
                  top_img: res.data.top_img,
                  intro: res.data.intro
              });
              wemark.parse(that.data.intro, that, {
                  // 新版小程序可自适应宽高
                  // imageWidth: wx.getSystemInfoSync().windowWidth - 40,
                  name: 'wemark'
              })
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
          title: '上海触界数码公司简介',
          path: '/page/about/about'
      }
  }
})