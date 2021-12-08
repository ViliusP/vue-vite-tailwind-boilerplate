<template>
  <div class="py-10">
    <Loader v-if="loading" />
    <Error v-if="error" :error="error" />

    <div class="text-5xl font-bold text-gray-600 pb-3">
      {{ $t('spaceflights.LATEST_NEWS') }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Article v-for="article in news" :key="article.id" :article="article" />
    </div>
    <div class="pt-6 flex items-center justify-center text-center">
      <div>
        <div class="text-2xl font-bold text-gray-600">
          {{ $t('spaceflights.TOTAL_NEWS') }}
        </div>
        <div class="text-3xl font-extrabold text-gray-600">{{ newsCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/news'
import { computed } from '@vue/reactivity'
import Error from './Error.vue'
import Loader from '@/components/Loader.vue'
import Article from './Article.vue'

const spaceflightsNewsStore = useNewsStore()
if (
  spaceflightsNewsStore.data?.length === 0 ||
  spaceflightsNewsStore.data === undefined
) {
  spaceflightsNewsStore.getArticles()
  spaceflightsNewsStore.getArticlesCount()
}

const loading = computed(() => spaceflightsNewsStore.loading)
const newsCount = computed(() => spaceflightsNewsStore.count)

const news = computed(() => spaceflightsNewsStore.data)
const error = computed(() => spaceflightsNewsStore.error)
</script>
