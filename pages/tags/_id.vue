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
