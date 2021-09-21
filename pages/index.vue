<template>
  <div>
    <Header></Header>
    <div class="container flex flex-col lg:flex-row mx-auto pb-4">
      <ListPosts :posts="posts"></ListPosts>
      <Sidebar />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ListPosts from '../components/ListPosts.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  components: {
    Header, Footer, ListPosts, Sidebar
  },
  data() {
    return {
      posts: {
        type: Array,
        default: null
      }
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
    // Get tags
    const posts = [
      {
        'title': 'Primo post di prova', 'intro': 'Breve descrizione del post', 'date': '21/09/2021', 'slug': 'primo-post-di-prova', 'tags': [{'name': 'Laravel', 'slug': 'laravel'}, {'name': 'PHP', 'slug': 'php'}]
      },
      {
        'title': 'Secondo post di prova', 'intro': 'Breve descrizione del post nuovo', 'date': '20/09/2021', 'slug': 'secondo-post-di-prova', 'tags': [{'name': 'Laravel', 'slug': 'laravel'}, {'name': 'PHP', 'slug': 'php'}, {'name': 'Vue', 'slug': 'vue'}]
      }
    ]
    this.posts = posts
  }
}
</script>
