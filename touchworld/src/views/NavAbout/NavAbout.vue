<template>
  <div class="about">
    <div v-if="loading" class="loading">
      <loading size="100px" type="spinner"/>
    </div>
    <div v-else class="content">
      <vue-markdown :source="content"></vue-markdown>
    </div>
    <tab-bar :active="2"></tab-bar>
  </div>
</template>

<script>
import { Loading } from 'vant'
import TabBar from '@/components/TabBar/TabBar'
import VueMarkdown from 'vue-markdown'
import api from '@/api/api'

export default {
  components: {
    Loading,
    TabBar,
    VueMarkdown
  },
  data () {
    return {
      loading: true,
      content: ''
    }
  },
  mounted () {
    this.getAboutInfo()
  },
  methods: {
    async getAboutInfo () {
      const json = await api.getAboutInfo()
      const data = json.data
      this.loading = false
      this.content = data.intro
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/theme';

.about {
  padding-bottom: 100px;
  font-size: 30px;
  background: #fff;
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    .van-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      i:before {
        width: 10px;
        color: $theme-color;
      }
    }
  }
  .content {
    padding: 20px;
    p {
      margin: 10px 0;
    }
  }
}
</style>
