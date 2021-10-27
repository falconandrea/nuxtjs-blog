<template>
  <ListPosts :posts="posts" :search="tag"></ListPosts>
</template>

<script>
import axios from 'axios'
import ListPosts from '../../components/ListPosts.vue'
export default {
  components: {
    ListPosts
  },
  data() {
    return {
      tag: '',
      posts: []
    }
  },
  head: {
    title: 'Tag - My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Short description of tag'
      }
    ],
  },
  created() {
    this.tag = this.$route.params.id
    // Get posts
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios.get(process.env.API_URL + 'posts?tag=' + this.tag)
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
