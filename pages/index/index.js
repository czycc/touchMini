let sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
let app = getApp();
Page({
    data: {
        tabs: [],
        categories: null,
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        articles: []
    },
    onLoad: function () {
        let that = this;
        //测试获取地理位置
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(latitude + '-' + longitude + '-' + speed + '-' + accuracy)
            }
        });
        //获取文章数据
        wx.request({
            url: app.globalData.baseUrl + 'api/articles',
            method: 'GET',
            success: function (res) {
                that.setData({
                    articles: res.data.articles,
                })
            }
        });
        //动态调整顶部导航栏尺寸
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.articles.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.articles.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
});