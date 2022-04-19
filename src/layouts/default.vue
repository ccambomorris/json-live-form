<template>
  <div class="layout-container flex flex-column">
    <div class="header flex-none">Header</div>
    <div class="main flex-1 flex flex-row">
      <div class="nav flex-none">Nav</div>
      <div class="content flex-grow-1">
        <NuxtPage />
      </div>
    </div>
    <div class="footer flex-none">footer</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout-container {
  border: 1px solid blue;
  min-height: calc(100vh - 2px);
}
.header {
  min-height: 3rem;
}
.main {
  border: 1px solid red;
}
.footer {
  min-height: 2rem;
}
.nav {
  min-width: 10rem;
  height: calc(100vh - 5.5rem);
  overflow-y: auto;
}
.content {
  border: 1px solid blue;
  height: calc(100vh - 5.5rem);
  overflow-y: auto;
}
</style>
