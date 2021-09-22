<template>
    <div>
      <Header></Header>
      <div class="container flex flex-col lg:flex-row mx-auto pb-4">
        <div class="p-4 w-full lg:w-2/3">
          <ListTags :tags="post.tags"></ListTags>
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
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
import ListTags from '../../components/ListTags.vue'
export default {
  components: {
    Header, Footer, Sidebar, ListTags
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
