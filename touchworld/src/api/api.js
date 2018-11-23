import axios from 'axios'

export default {
  // NavHome
  async getHomeInfo () {
    const json = await axios.get('/api/articles')
    return json.data
  },
  // Article
  async getArticle (id) {
    const json = await axios.get('/api/articles/' + id)
    return json.data
  },
  // NavAbout
  async getAboutInfo () {
    const json = await axios.get('/api/about')
    return json.data
  },
  // NavVideo
  async getVideoInfo () {
    const json = await axios.get('/api/videos')
    return json.data
  },
  // NavVideo
  async getVideo (id) {
    const json = await axios.get('/api/videos/' + id)
    return json.data
  }
}
