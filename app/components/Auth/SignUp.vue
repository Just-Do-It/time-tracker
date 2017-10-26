<template>
  <main>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignUp">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Mail"
                        id="email"
                        v-model="email"
                        type="email"
                        required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm password"
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        :rules="[comparePasswords]">
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row justify-space-between>
                    <v-flex xs6 text-xs-left>
                      <v-btn class="m0" type="submit">Sign Up</v-btn>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <v-btn class="m0" to="/" color="error">Back</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not to match' : ''
      }
    },
    methods: {
      onSignUp () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin: 0;
  }
</style>
