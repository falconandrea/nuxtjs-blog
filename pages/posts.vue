<template>
  <ListPosts :posts="posts" :search="search"></ListPosts>
</template>

<script>
import ListPosts from '../components/ListPosts.vue'
import { createSEOMeta } from '../utils/seo.js'
export default {
  components: {
    ListPosts
  },
  async asyncData({route, $axios}) {
    // Get posts
    const { data } = await $axios.get('posts?search=' + route.query.search)
    return {posts: data.data}
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
      ...createSEOMeta({
        description: 'Mi chiamo Andrea Falcon e sono uno sviluppatore Web Full-Stack. Ho deciso di creare questo blog per tener traccia delle tecnologie e conoscenze che apprendo durante la mia formazione.'
        })
      ],
    }
  }
}
</script>
