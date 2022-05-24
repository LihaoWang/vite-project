<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import useTags from '../composables/useTags'
const { posts } = defineProps(['posts'])
const { tags } = useTags(posts)
</script>

<style lang="stylus" scoped>
.tag-cloud
    padding: 1rem
h3
    margin: 0px 0px 1rem 0px
</style>
