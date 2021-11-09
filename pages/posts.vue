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
  head() {
    return {
      title: 'Posts - AndreaFalcon.Dev',
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
