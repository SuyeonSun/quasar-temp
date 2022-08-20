<template>
  <div class="q-pa-md" style="max-width: 500px">
    <!-- test -->
    <div class="test q-pt-md">
      <div>6. display: block test</div>
      <button class="test-btn">test</button>
      <div class="test-content">
        <a>Content</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
/* test */
.test-content {
  display: none;
}

.test:hover .test-content {
  display: block;
}
</style>
