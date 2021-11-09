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
  head() {
    return {
      title: 'AndreaFalcon.Dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mi chiamo Andrea Falcon e sono uno sviluppatore Web Full-Stack. Ho deciso di creare questo blog per tener traccia delle tecnologie e conoscenze che apprendo durante la mia formazione.'
        }
      ],
    }
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
