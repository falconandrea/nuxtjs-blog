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
      search: null,
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
    title: 'Posts - My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'List of posts'
      }
    ],
  },
  created() {
    this.search = (this.$route.query && this.$route.query.search) ? this.$route.query.search : null
    // Get posts
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // Get only first 10 posts from the list
          let posts = response.data.slice(0, 10)
          // Filter
          if(this.search){
            posts = posts.filter(post => post.title.includes(this.search))
          }
          // Add Fake date and fake tags
          posts = posts.map(post => {
            // Get 2 random tags from fakeTags array
            post.tags = this.fakeTags.slice(0, 2).map(function () {
              return this.splice(Math.floor(Math.random() * this.length), 1)[0];
            }, this.fakeTags.slice());
            // Add static date
            post.date = '22/09/2021'
            // Return update post detail
            return post
          })
          this.posts = posts
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
