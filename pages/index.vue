<template>
  <ListPosts :posts="posts"></ListPosts>
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
      posts: []
    }
  },
  head: {
    title: 'My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My website description'
      }
    ],
  },
  created() {
    // Get posts
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios.get(process.env.API_URL + 'posts')
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
