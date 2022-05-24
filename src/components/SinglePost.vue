<template>
  <div class="single-post">
    <router-link
      :to="{ name: 'Detail', params: { id: post.id } }"
      class="title"
    >
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          #{{ tag }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { post } = defineProps(['post'])

const snippet = computed(() => {
  return post.body.substring(0, 100) + '....'
})
</script>

<style lang="stylus" scoped>
.single-post
    background-color: #f5f5f5
    border-radius: 5px
    padding: 1.5rem
    margin: 1rem 0px
    display: flex
    flex-direction: column
h3
    margin: 0px
.title
    margin: auto
.tags
    margin: 0.5rem 0px
.tag
    padding: 0.5rem
    background-color: white
    border-radius: 5px
    margin: 0px 10px
    font-size 0.9rem
</style>
