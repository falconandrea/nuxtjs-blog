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
    title: 'Posts - My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'List of posts'
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
