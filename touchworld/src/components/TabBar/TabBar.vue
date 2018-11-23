<template>
  <tabbar v-model="activeIndex" @change="handleChange">
    <tabbar-item>
      <i class="iconfont" slot="icon">&#xe61a;</i>
      <span class="home-text">首页</span>
    </tabbar-item>
    <tabbar-item>
      <i class="iconfont" slot="icon">&#xe6b2;</i>
      <span class="home-text">视频展示</span>
    </tabbar-item>
    <tabbar-item>
      <i class="iconfont" slot="icon">&#xe693;</i>
      <span class="home-text">关于我们</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'TabBar',
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activeIndex: this.active
    }
  },
  activated () {
    this.activeIndex = this.active
  },
  methods: {
    handleChange () {
      switch (this.activeIndex) {
        case 0:
          this.$router.replace('/')
          break
        case 1:
          this.$router.replace('/navVideo')
          break
        case 2:
          this.$router.replace('/navAbout')
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/theme';

.van-tabbar {
  height: $bottom-height;
  .van-tabbar-item--active {
    color: $theme-color;
  }
  .van-tabbar-item__icon {
    i {
      display: block;
      margin-bottom: 5px;
      text-align: center;
      font-size: 40px;
    }
  }
  .van-tabbar-item__text {
    text-align: center;
    span {
      display: block;
      font-size: 15px;
      text-align: center;
    }
  }
}
</style>
