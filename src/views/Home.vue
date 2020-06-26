<template>
  <div class="Home">
    <AppBar />
    <v-main>
      <HelloWorld />
    </v-main>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import AppBar from '../components/AppBar'

export default {
  name: 'Home',
  components: {
    HelloWorld, AppBar
  }
}
</script>

<style lang="scss">
.Home {
  .v-app-bar {
    h2 {
      text-transform: uppercase;
    }
  }
}
</style>
