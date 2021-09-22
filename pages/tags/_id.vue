<template>
    <div>
      <Header></Header>
      <div class="container flex flex-col lg:flex-row mx-auto pb-4">
        <ListPosts :posts="posts" :search="tag"></ListPosts>
        <Sidebar />
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Sidebar from '../../components/Sidebar.vue'
import ListPosts from '../../components/ListPosts.vue'
export default {
  components: {
    Header, Footer, Sidebar, ListPosts
  },
  data() {
    return {
      tag: '',
      posts: [],
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
    title: 'Tag - My personal blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Short description of tag'
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
      return await axios.get('https://jsonplaceholder.typicode.com/posts')
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
          // Filter array with tag
          if(this.tag){
            posts = posts.filter(post => post.tags.some(tagValue => tagValue.slug === this.tag))
          }
          this.posts = posts
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
