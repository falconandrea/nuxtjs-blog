<template>
  <div class="p-4 w-full lg:w-2/3 pt-8">
    <p><small>{{ post.date }}</small></p>
    <h2 class="text-gray-700 font-medium text-3xl py-4">{{ post.title }}</h2>
    <ListTags :tags="post.tags"></ListTags>
    <div class="text-gray-500 py-4 container-post" v-html="post.text"></div>
  </div>
</template>

<script>
import axios from 'axios'
import ListTags from '../../components/ListTags.vue'
import Prism from '~/plugins/prism.js'
export default {
  components: {
    ListTags
  },
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      slug: '',
      post: {
        title: '',
        text: '',
        date: '',
        tags: []
      }
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
    this.id = this.$route.params.id
    // Get posts
    this.getPost()
  },
  methods: {
    async getPost() {
      await axios.get(process.env.API_URL + 'posts/' + this.id)
        .then((response) => {
          this.post = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }
}
</script>

<style>
  .container-post a {
    text-decoration: underline;
  }
  .container-post strong,
  .container-post b {
    font-weight: 500;
  }
</style>
