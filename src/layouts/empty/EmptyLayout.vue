<template>
  <div class="overflow-hidden empty-layout">
    <slot />
  </div>
</template>

<style>
  .empty-layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    position: relative;
    color: rgba(0, 0, 0, 0.87);
  }
</style>
