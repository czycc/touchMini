<template>
  <div class="home">
    <tabs v-model="active" sticky>
      <tab class="tab" :title="category.category" v-for="category of homeInfo" :key="category.id">
        <card-article
          class="card-article"
          :to="`/article/${article.id}`"
          v-for="article of category.articles"
          :key="article.id"
          :title="article.title"
          :imgURL="article.img_url"
          :desc="article.desc"
          :created="article.created_at"
        ></card-article>
      </tab>
    </tabs>
    <tab-bar :active="0"></tab-bar>
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
      homeInfo: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    async getHomeInfo () {
      const json = await api.getHomeInfo()
      this.homeInfo = json.data
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/theme.scss";

.home {
  padding-bottom: $bottom-height;
  .tab {
    padding: 20px;
    .card-article {
      margin-bottom: 20px;
    }
  }
}
</style>
