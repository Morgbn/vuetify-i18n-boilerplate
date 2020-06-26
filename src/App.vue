<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html { // vuetify reset
  overflow-y: auto !important;
  overflow-x: auto !important;
}
</style>
