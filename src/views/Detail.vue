<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <!-- <div v-else>
    <Spinner />
  </div> -->
  <!-- <div v-if="mdhtml" v-html="mdhtml"></div> -->
  <div class="md">
    <vue-markdown
      :source="hello"
      :options="{ html: true, linkify: true, typographer: true }"
    ></vue-markdown>
  </div>
</template>

<script setup>
import hello from '../md/hello.md?raw'
import VueMarkdown from 'vue-markdown-render'
import { marked } from 'marked'
import Spinner from '../components/Spinner.vue'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
import { watch, watchEffect, ref } from 'vue'
const route = useRoute()
const { id } = defineProps(['id'])
const { post, error, load } = getPost(route.params.id)
const mdhtml = ref('123')

watch(post, () => {
  console.log('run', post.value)
  mdhtml.value = marked(post.value.body)
})

load()
</script>

<style lang="stylus">
.md
    text-align left
.md
    pre
        background-color #fafafa
        padding 2rem
</style>
