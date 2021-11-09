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
  head() {
    return {
      title: this.tag + ' - AndreaFalcon.Dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Qua puoi trovare i miei post relativi a ' + this.tag
        }
      ]
    }
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
