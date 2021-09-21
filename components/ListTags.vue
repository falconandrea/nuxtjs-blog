<template>
  <div class="flex flex-row">
    <template v-for="tag in tags">
      <Tag :key="tag.slug" :name="tag.name" :slug="tag.slug"></Tag>
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
