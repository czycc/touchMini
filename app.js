App({
    onLaunch: function () {
        wx.login({
            success: function(res) {
              if (res.code) {
                //发起网络请求
                // wx.request({
                //   url: 'https://test.com/onLogin',
                //   data: {
                //     code: res.code
                //   }
                // })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          });
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        userInfo: {
            openid: '',
            phone: '',
            name: '',
            nickname: '',
            avatar: '',
            is_new: '',
            created_at: '',
            permissions: [],
            hasLogin: false
        },
        // baseUrl: 'http://gotop-admin.test/'
        baseUrl: 'https://mini.shanghaichujie.com'
    }
});