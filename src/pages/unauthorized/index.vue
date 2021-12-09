<template>
  <div class="ma-0 pa-0 fill-height center-message bg-gray-50">
    <div class="mx-auto">
      <img alt="Security" class="" width="350" src="@/assets/undraw_security.svg" />
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ $t('unauthorized_page.UNAUTHORIZED') }}</span>
        <span class="block text-indigo-600">{{ $t('unauthorized_page.LOST') }}</span>
      </h2>
      <div class="mt-4 flex lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
            @click="back()"
          >
            {{ $t('unauthorized_page.BACK') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const back = () => {
    router.back()
  }
</script>
<style>
  .fill-height {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .center-message {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: calc(100% + 24px);
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
</style>
