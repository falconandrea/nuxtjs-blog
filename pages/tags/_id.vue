<template>
  <ListPosts :posts="posts" :search="tag"></ListPosts>
</template>

<script>
import ListPosts from '../../components/ListPosts.vue'
import { createSEOMeta } from '../../utils/seo.js'
export default {
  components: {
    ListPosts
  },
  async asyncData({params, $axios}) {
    // Get posts
    const { data } = await $axios.get(process.env.API_URL + 'posts?tag=' + params.id)
    return { posts: data.data }
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
      ...createSEOMeta({
        description: 'Qua puoi trovare i miei post relativi a ' + this.tag
        })
      ],
    }
  }
}
</script>
