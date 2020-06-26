<template>
  <div class="Login">
    <AppBar />
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8" lg="4">
            <v-card outlined>
              <v-toolbar color="primary" flat dark>
                <v-toolbar-title>{{ $t('login') }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="isFormValid">
                  <v-text-field
                    v-model="form.name"
                    :label="$t('name')"
                    :rules="nameRules"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  />
                  <v-text-field
                    v-model="form.password"
                    :label="$t('password')"
                    :rules="passwordRules"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  />
                  <v-expand-transition>
                    <v-text-field
                      v-show="isRegisterForm"
                      v-model="form.c_password"
                      :label="$t('confirmPassword')"
                      :rules="c_passwordRules"
                      :required="isRegisterForm"
                      name="c_password"
                      prepend-icon="mdi-lock"
                      type="password"
                    />
                  </v-expand-transition>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!isFormValid" class="mb-2" color="primary" @click="login">
                  {{ $t(isRegisterForm ? 'register' : 'login') }}
                </v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-card-actions>
                <v-row>
                  <v-col class="d-flex justify-center align-center">
                    <span class="mr-2">
                      {{ $t(isRegisterForm ? 'alreadyAnAccount' : 'noAccount') }}
                    </span>
                    <v-btn text @click="toggleForm">
                      {{ $t(isRegisterForm ? 'login' : 'register') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'

export default {
  name: 'Login',
  components: {
    AppBar
  },
  data () {
    return {
      form: {
        name: '',
        password: '',
        c_password: ''
      },
      isFormValid: false,
      isRegisterForm: false,
      nameRules: [
        v => !!v || `${this.$t('name')} ${this.$t('isRequired')}`
      ],
      passwordRules: [
        v => !!v || `${this.$t('password')} ${this.$t('isRequired')}`,
        v => v.length >= 6 || this.$t('passwordLength', {length: 6}),
      ],
      c_passwordRules: [
        v => !this.isRegisterForm || !!v || `${this.$t('password')} ${this.$t('isRequired')}`,
        v => v == this.form.password || this.$t('passwordConfirm'),
      ]
    }
  },
  methods: {
    login () {
      if (!this.isFormValid) { return }
      this.$store.dispatch(`User/${this.isRegisterForm ? 'register' : 'login'}`, this.form)
        .then(() => this.$router.push({ path: 'dashboard' }))
    },
    toggleForm () {
      this.isRegisterForm = !this.isRegisterForm
    }
  }
}
</script>

<style lang="scss">
//.Login {

//}
</style>
