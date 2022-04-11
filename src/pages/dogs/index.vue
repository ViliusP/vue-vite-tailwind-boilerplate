<template>
  <div>
    <div class="prose prose-2xl py-10 text-gray-900 text-4xl text-center">{{ $t('dogs_page.TITLE') }}</div>

    <div class="flex flex-col">
      <transition name="dog-content-fade" mode="out-in">
        <div v-if="isFetchingUrl || (isContentLoading && !isUrlMp4)" class="bg-gray-200 img-video animate-pulse rounded-2xl"></div>
        <img v-else-if="!isUrlMp4" class="img-video dogs-img rounded-2xl" :src="dogsStore.data?.url" />
        <video v-else-if="isUrlMp4" class="img-video" :src="dogsStore.data?.url" controls autoplay>
          Your browser does not support the video tag.
        </video>
      </transition>
      <div class="mx-auto text-sm text-indigo-800">
        {{ $t('dogs_page.SIZE') }}{{ isFetchingUrl ? $t('common.PLEASE_WAIT') : contentSize }}
      </div>
      <outlined-button class="mx-auto mt-5" @click="getRandomDogPhoto">{{ $t('dogs_page.NEXT') }}</outlined-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDogsStore } from '@/stores/dog'
  import { computed, ref } from '@vue/reactivity'
  import { watch } from 'vue'

  const dogsStore = useDogsStore()

  const isUrlMp4 = computed(() => dogsStore.isUrlMp4)
  const contentUrl = computed(() => dogsStore.data?.url)
  const isFetchingUrl = computed(() => dogsStore.loading)
  const contentSize = computed(() => dogsStore.data?.fileSizeBytes)

  watch(
    () => contentSize,
    (size) => {
      console.log('contentSize', size.value)
    }
  )

  const isContentLoading = ref(false)

  watch(
    () => contentUrl.value,
    (url) => {
      if (!isUrlMp4.value) {
        const image = new Image()
        image.onload = () => {
          isContentLoading.value = false
        }
        image.src = url ?? ''
      }
    }
  )

  const getRandomDogPhoto = () => {
    isContentLoading.value = true
    dogsStore.getRandomDog()
  }
  if (dogsStore.data === undefined) getRandomDogPhoto()
</script>

<style>
  .img-video {
    display: relative;
    width: 720px;
    height: 720px;
    max-width: 720px;
    max-height: 720px;
    object-fit: contain;
  }
  .dog-content-fade-enter-active,
  .dog-content-fade-leave-active {
    transition: opacity 0.075s ease;
  }

  .dog-content-fade-enter-from,
  .dog-content-fade-leave-to {
    opacity: 0;
  }
</style>
