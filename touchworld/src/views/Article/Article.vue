<template>
  <div class="article">
    <div v-if="loading" class="loading">
      <loading size="100px" type="spinner"/>
    </div>
    <div v-else class="container">
      <div class="article-main">
        <h1 class="article-title">{{title}}</h1>
        <div class="article-time">{{time}}</div>
        <div class="article-content">
          <vue-markdown :source="content"></vue-markdown>
        </div>
      </div>
      <div class="other">
        <h2>其他推荐</h2>
        <card-article class="card-article" type="B" to="/article"></card-article>
        <card-article class="card-article" type="B"></card-article>
        <card-article class="card-article" type="B"></card-article>
      </div>
    </div>
    <tab-bar :active="-1"></tab-bar>
  </div>
</template>

<script>
import { Loading } from 'vant'
import TabBar from '@/components/TabBar/TabBar'
import CardArticle from '@/components/CardArticle/CardArticle'
import VueMarkdown from 'vue-markdown'
import api from '@/api/api'

export default {
  components: {
    Loading,
    TabBar,
    VueMarkdown,
    CardArticle
  },
  data () {
    return {
      loading: true,
      title: '',
      time: '',
      content: ''
    }
  },
  activated () {
    this.loading = true
    this.getArticle()
  },
  methods: {
    async getArticle () {
      this.title = ''
      this.time = ''
      this.content = ''
      const json = await api.getArticle(this.$route.params.id)
      const data = json.data
      this.loading = false
      this.title = data.title
      this.time = data.created_at
      this.content = data.content
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/theme';

.article {
  overflow: hidden;
  padding-bottom: 100px;
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
  .article-main {
    padding: 30px;
    background-color: #fff;
    .article-title {
      font-size: 50px;
      text-align: center;
    }
    .article-time {
      text-align: center;
      font-size: 30px;
      color: #999;
    }
    .article-content {
      padding: 20px;
      font-size: 28px;
      img {
        margin: 10px 0;
        width: 100%;
      }
    }
  }
  .other {
    padding: 30px;
    h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    .card-article {
      margin-bottom: 20px;
    }
  }
}
</style>
