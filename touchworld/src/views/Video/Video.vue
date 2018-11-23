<template>
  <div class="video">
    <div v-if="loading" class="loading">
      <loading size="100px" type="spinner"/>
    </div>
    <div v-else class="container">
      <div class="video-main">
        <h1 class="video-title">{{title}}</h1>
        <div class="video-time">{{time}}</div>
        <div class="video-content">
          <div class="video-wrapper">
            <video :src="videoURL" controls></video>
          </div>
          <van-button class="btn" type="primary" size="large">下载视频</van-button>
          <van-button class="btn" type="primary" size="large">分享视频</van-button>
        </div>
      </div>
      <div class="other">
        <h2>其他推荐</h2>
        <card-article class="card-video" type="B" to="/article"></card-article>
        <card-article class="card-video" type="B"></card-article>
        <card-article class="card-video" type="B"></card-article>
      </div>
    </div>
    <tab-bar :active="-1"></tab-bar>
  </div>
</template>

<script>
import { Button, Loading } from 'vant'
import TabBar from '@/components/TabBar/TabBar'
import CardArticle from '@/components/CardArticle/CardArticle'
import api from '@/api/api'

export default {
  components: {
    vanButton: Button,
    Loading,
    TabBar,
    CardArticle
  },
  data () {
    return {
      loading: true,
      title: '',
      time: '',
      content: '',
      videoURL: ''
    }
  },
  activated () {
    this.loading = true
    this.getVideo()
  },
  methods: {
    async getVideo () {
      const json = await api.getVideo(this.$route.params.id)
      const data = json.data
      this.loading = false
      this.title = data.title
      this.time = data.created_at
      this.videoURL = data.video_url
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/theme';

.video {
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
        color: $theme-color
      }
    }
  }
  .video-main {
    padding: 30px;
    background-color: #fff;
    .video-title {
      font-size: 50px;
      text-align: center;
    }
    .video-time {
      text-align: center;
      font-size: 30px;
      color: #999;
    }
    .video-content {
      padding-top: 20px;
      .video-wrapper {
        overflow: hidden;
        position: relative;
        background: #000;
        padding-top: 100%;
        video {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .btn {
        margin: 20px 0 0;
        height: 80px;
        font-size: 30px;
      }
    }
  }
  .other {
    padding: 30px;
    h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    .card-video {
      margin-bottom: 20px;
    }
  }
}
</style>
