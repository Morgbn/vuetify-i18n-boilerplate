<template>
  <div class="Dashboard">
    <AppBar />
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-4">
            <h2 v-if="user" class="display-2 font-weight-bold mb-3">
              {{ $t('welcomeUser', {name: user.name}) }}
            </h2>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '../components/AppBar'

export default {
  name: 'Dashboard',
  components: {
    AppBar
  },
  computed: {
    ...mapState('User', [
      'user'
    ])
  }
}
</script>

<style lang="scss">
//.Dashboard {

//}
</style>
