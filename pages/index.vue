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
      posts: [],
      fakeTags: [
        {slug: 'php', name: 'PHP'},
        {slug: 'laravel', name: 'Laravel'},
        {slug: 'vue', name: 'Vue'},
        {slug: 'frontend', name: 'FrontEnd'},
        {slug: 'backend', name: 'Backend'},
      ],
    }
  },
  head: {
    title: 'My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My website description'
      }
    ],
  },
  created() {
    // Get posts
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // Get only first 5 posts from the list
          let posts = response.data.slice(0, 5)
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
