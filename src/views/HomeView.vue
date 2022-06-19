<template>
  <div class="home d-flex justify-content-between align-items-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Selamat Datang di QuranWeb"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
  img {
    width: 40%;
    max-width: 300px;
    padding: 20px;
  }
</style>