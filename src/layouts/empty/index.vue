<template>
  <t-app class="overflow-hidden">
    <div class="overflow-hidden empty-layout">
      <slot />
    </div>
  </t-app>
</template>

<script></script>

<style>
.empty-layout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  height: 100%;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
