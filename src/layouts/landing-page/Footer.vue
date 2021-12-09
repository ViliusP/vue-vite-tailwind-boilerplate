<template>
  <footer class="">
    <div
      class="overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl text-base text-center text-gray-500"
    >
      <div>
        {{ $t('landing_page_layout.MADE_WITH') }}&nbsp;<i
          class="inline-icon text-indigo-500"
          ><CardsHeart />
        </i>
        {{ $t('landing_page_layout.BY') }}
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://github.com/ViliusP" rel="noopener" target="_blank"
          >VP</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
  import CardsHeart from 'vue-material-design-icons/CardsHeart.vue'
</script>

<style>
  .inline-icon svg {
    display: inline;
  }

  .landing-page-footer {
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
