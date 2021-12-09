<template>
  <a
    target="_blank"
    :href="props.article.url"
    class="flex flex-col rounded border-t-2 border-b-2 py-4 px-4 hover:bg-gray-200 cursor-pointer"
  >
    <div class="prose prose-sm">{{ props.article.newsSite }}</div>

    <div class="prose prose-2xl leading-none">
      {{ props.article.title }}
    </div>
    <div class="py-4 px-1">
      <div v-show="isImageLoading">Loading</div>
      <img
        v-show="!isImageLoading"
        @load="onImageLoad()"
        :src="props.article.imageUrl"
      />
    </div>
    <div class="prose">{{ props.article.summary }}</div>
    <div class="flex-grow" />
    <div class="prose mt-5">
      {{ formatDate(props.article.publishedAt) }}
    </div>
  </a>
</template>
<script setup lang="ts">
  import { Article } from '@/services/news-api/types'
  import { ref } from '@vue/reactivity'
  import { formatDate } from '@/utils/date'

  const props = defineProps<{
    article: Article
  }>()

  const isImageLoading = ref(false)

  if (props.article.imageUrl !== '' || props.article.imageUrl !== undefined) {
    isImageLoading.value = true
  }

  const onImageLoad = () => {
    isImageLoading.value = false
  }
</script>
<style lang=""></style>
