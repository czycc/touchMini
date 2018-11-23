<template>
  <div v-if="type === 'A'" class="card-article-A" @click="goArticle">
    <div class="header">
      <span class="title">{{title}}</span>
      <span class="time">{{time}}</span>
    </div>
    <div class="content">
      <div class="img-wrap"><img :src="imgURL"></div>
      <p class="desc">{{desc}}</p>
    </div>
  </div>
  <div v-else-if="type === 'B'" class="card-article-B" @click="goArticle">
    <div class="title">{{title}}</div>
    <div class="content">
      <div class="img-wrap"><img :src="imgURL"></div>
      <div class="text">
        <p class="desc">{{desc}}</p>
        <p class="time">{{time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-article',
  props: {
    type: {
      type: String,
      default: 'A'
    },
    title: {
      type: String,
      default: 'title'
    },
    created: {
      type: String,
      default: 'time'
    },
    imgURL: {
      type: String,
      default: 'https://touchworld.oss-cn-shanghai.aliyuncs.com/touch/img/logo.png'
    },
    desc: {
      type: String,
      default: 'desc'
    },
    to: {
      type: String,
      default: '/'
    }
  },
  methods: {
    goArticle () {
      this.$router.replace(this.to)
    }
  },
  computed: {
    time () {
      let now = new Date().getTime()
      let created = new Date(this.created.replace(/-/ig, '/')).getTime()
      let time = now - created
      let seconds = time / 1000
      let minute = parseInt(seconds / 60)
      let hour = parseInt(minute / 60)
      let day = parseInt(hour / 24)
      let week = parseInt(day / 7)
      let month = parseInt(day / 30)
      let year = parseInt(month / 12)
      if (year > 0) {
        return `${year}年前`
      } else if (month > 0) {
        return `${month}月前`
      } else if (week > 0) {
        return `${week}周前`
      } else if (day > 0) {
        return `${day}天前`
      } else if (hour > 0) {
        return `${hour}小时前`
      } else if (minute > 0) {
        return `${minute}分钟前`
      } else {
        return '刚刚'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-article-A {
  border: 1px solid #dddddd;
  border-radius: 10px;
  background: #fff;
  font-size: 30px;
  color: #6d6d6d;
  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #f5f5f5;
    .title {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 36px;
    }
    .time {
      text-align: right;
      flex: 0 0 160px;
    }
  }
  .content {
    padding: 20px;
    .img-wrap {
      position: relative;
      width: 100%;
      padding-top: 66.3%;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 100%;
      }
    }
    .desc {
      overflow: hidden;
      margin-top: 20px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
    }
  }
}
.card-article-B {
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  background: #fff;
  .title {
    overflow: hidden;
    padding: 16px 0;
    border-bottom: 1px solid #e5e5e5;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 32px;
    color: #989898;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 200px;
    min-width: 0;
    .img-wrap {
      flex: 0 0 120px;
      width: 120px;
      height: 120px;
      img {
        width: 100%;
      }
    }
    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      font-size: 26px;
      min-width: 0;
      .desc {
        overflow: hidden;
        flex: 0 0 70px;
        color: #6d6d6d;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
      }
      .time {
        margin-top: 8px;
        color: #cecece;
      }
    }
  }
}
</style>
