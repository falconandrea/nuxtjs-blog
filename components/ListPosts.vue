<template>
  <div class="p-4 w-full lg:w-2/3">
    <template v-for="post in posts">
      <ShortPost :key="post.slug" :post="post" />
    </template>
  </div>
</template>

<script>
import ShortPost from '../components/ShortPost.vue'
export default {
  components: {
    ShortPost
  },
  props: {
    posts: {
      type: Array,
      default: null
    }
  }
}
</script>
