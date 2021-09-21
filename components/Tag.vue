<template>
  <a :href="url" class="text-sm text-gray-500 px-2 py-1 rounded-xl bg-blue-100 hover:bg-blue-400 hover:text-white mr-2" :title="name">
    {{ name }}
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      url: `tags/${ this.slug }`
    }
  }
}
</script>
