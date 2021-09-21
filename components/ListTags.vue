<template>
  <div class="flex flex-row">
    <template v-for="tag in tags">
      <Tag :key="tag.slug" :tag="tag"></Tag>
    </template>
  </div>
</template>

<script>
import Tag from '../components/Tag.vue'
export default {
  components: {
    Tag,
  },
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
}
</script>
