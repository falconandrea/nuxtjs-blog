<template>
  <div class="p-4 w-full lg:w-2/3 pt-8">
    <p><small>{{ post.date }}</small></p>
    <h1 class="text-gray-700 font-medium text-3xl py-4">{{ post.title }}</h1>
    <ListTags :tags="post.tags"></ListTags>
    <div class="text-gray-500 py-4 container-post" v-html="post.text"></div>
  </div>
</template>

<script>
import ListTags from '../../components/ListTags.vue'
import { createSEOMeta } from '../../utils/seo.js'
import Prism from '~/plugins/prism.js'
export default {
  components: {
    ListTags
  },
  async asyncData({params, $axios}) {
    // Get posts
    const { data } = await $axios.get(process.env.API_URL + 'posts/' + params.id)
    return {post: data.data}
  },
  data() {
    return {
      slug: '',
      post: {
        title: '',
        text: '',
        date: '',
        seo_title: '',
        seo_description: '',
        tags: []
      }
    }
  },
  head() {
    return {
      title: this.post.seo_title + ' - AndreaFalcon.Dev',
      meta: [
      ...createSEOMeta({
        description: this.post.seo_description
        })
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
  },
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
