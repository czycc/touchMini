<template>
  <div class="video">
    <tabs v-model="active" sticky>
      <tab class="tab" :title="category.category" v-for="category of videoInfo" :key="category.id">
        <card-article
          class="card-video"
          v-for="video of category.videos"
          :key="video.id"
          :to="`/video/${video.id}`"
          :title="video.title"
          :imgURL="video.top_img"
          :desc="video.desc"
          :created="video.created_at"
        ></card-article>
      </tab>
    </tabs>
    <tab-bar :active="1"></tab-bar>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import TabBar from '@/components/TabBar/TabBar'
import CardArticle from '@/components/CardArticle/CardArticle'
import api from '@/api/api'

export default {
  components: {
    Tab,
    Tabs,
    TabBar,
    CardArticle
  },
  data () {
    return {
      active: 0,
      videoInfo: []
    }
  },
  mounted () {
    this.getVideoInfo()
  },
  methods: {
    async getVideoInfo () {
      const json = await api.getVideoInfo()
      this.videoInfo = json.data
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/theme.scss";

.video {
  padding-bottom: $bottom-height;
  .tab {
    padding: 20px;
    .card-video {
      margin-bottom: 20px;
    }
  }
}
</style>
