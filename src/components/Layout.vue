<script setup>
import Header from "./Header.vue"
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  margin-top: 5rem;
  padding: 0 25px;
}
</style>