import {
    $wuxActionSheet
} from '../../dist/wux/index'
let sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
let app = getApp();
Page({
    data: {
        tabs: ['我的项目', '所有项目'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        myprojects: [],
        allprojects: []
    },
    
    onLoad: function () {
        let that = this;
        //判断是否有权限
        if (!app.globalData.userInfo.hasLogin) {
            wx.redirectTo({
                url: '../error/noPermission',
            })
        }
        //获取项目数据
        wx.request({
            url: app.globalData.baseUrl + '/api/projects?openid=' + app.globalData.userInfo.openid,
            method: 'GET',
            success: function (res) {
                console.log(res.data.allprojects)
                that.setData({
                    myprojects: res.data.myprojects,
                    allprojects: res.data.allprojects
                })
            }
        });
        //动态调整顶部导航栏尺寸
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
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
    showActionSheet(e) {
        $wuxActionSheet().showSheet({
            titleText: '项目修改',
            buttons: [{
                text: '增加'
            }, {
                text: '修改'
            }],
            buttonClicked(index, item) {
                index === 0 && wx.navigateTo({
                    url: '/pages/dialog/index'
                })

                index === 1 && wx.navigateTo({
                    url: `/pages/project/addProject?id=${e.target.id}`
                })

                return true
            },
            cancelText: '取消',
            cancel() {},
            destructiveText: '删除',
            destructiveButtonClicked() {},
        })
    },
});