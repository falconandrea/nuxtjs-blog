<template>
  <div class="p-4 w-full lg:w-1/3">
    <h3 class="mt-4 mb-2">Cerca tra i post</h3>
    <form method="GET" action="" class="flex flex-row">
      <input id="search-input" class="border-2 rounded-xl px-4 py-2" type="text" name="search" placeholder="Laravel, Vue ..."/>
      <button class="px-4 text-white bg-blue-300 rounded-xl ml-2 hover:bg-blue-400" type="submit">
          Cerca
      </button>
    </form>

    <h3 class="mt-4 mb-2">Tags</h3>
    <ListTags :tags=tags></ListTags>
  </div>
</template>

<script>
import ListTags from '../components/ListTags.vue'
export default {
  components: {
    ListTags
  },
  data () {
    return {
      tags: []
    }
  },
  created() {
    // Get tags
    const tags = [
      {
        'name': 'Laravel', 'slug': 'laravel',
      },
      {
        'name': 'PHP', 'slug': 'php',
      },
      {
        'name': 'Vue', 'slug': 'vue',
      }
    ]
    this.tags = tags
  }
}
</script>
