<template>
  <ListPosts :posts="posts" :search="search"></ListPosts>
</template>

<script>
import axios from 'axios'
import ListPosts from '../components/ListPosts.vue'
export default {
  components: {
    ListPosts
  },
  data() {
    return {
      posts: [],
      search: null
    }
  },
  head: {
    title: 'AndreaFalcon - Blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mi chiamo Andrea Falcon e sono uno sviluppatore Web Full-Stack. In questo blog cercherò di raccogliere le conosceneze e le informazioni che mi son state utili durante il mio lavoro.'
      }
    ],
  },
  created() {
    this.search = (this.$route.query && this.$route.query.search) ? this.$route.query.search : null
    // Get posts
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios.get(process.env.API_URL + 'posts?search=' + this.search)
        .then((response) => {
          this.posts = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }
}
</script>
