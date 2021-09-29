<template>
  <div class="p-4 w-full lg:w-2/3">
    <ListTags :tags="post.tags"></ListTags>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import ListTags from '../../components/ListTags.vue'
export default {
  components: {
    ListTags
  },
  data() {
    return {
      slug: '',
      post: {
        title: '',
        body: '',
        tags: []
      },
      fakeTags: [
        {slug: 'php', name: 'PHP'},
        {slug: 'laravel', name: 'Laravel'},
        {slug: 'vue', name: 'Vue'},
        {slug: 'frontend', name: 'FrontEnd'},
        {slug: 'backend', name: 'Backend'},
      ]
    }
  },
  head: {
    title: 'Title post - My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Short description of post'
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
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((response) => {
          const post = response.data
          // Add fake date
          post.date = '22/09/2021'
          // Add Fake tags
          post.tags = this.fakeTags.slice(0, 2).map(function () {
            return this.splice(Math.floor(Math.random() * this.length), 1)[0];
          }, this.fakeTags.slice());

          this.post = post
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
