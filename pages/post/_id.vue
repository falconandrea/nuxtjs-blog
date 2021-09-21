<template>
    <div>
      <Header></Header>
      <div class="container flex flex-col lg:flex-row mx-auto pb-4">
        <div class="p-4 w-full lg:w-2/3">
          {{ slug }}
        </div>
        <Sidebar />
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
  components: {
    Header, Footer, Sidebar
  },
  data() {
    return {
      slug: this.$route.params.id || ''
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
  }
}
</script>
