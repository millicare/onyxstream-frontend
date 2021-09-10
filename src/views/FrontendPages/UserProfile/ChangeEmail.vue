<template>
    <section class="m-profile manage-p">
        <b-container class="h-100">
            <b-row class="align-items-center justify-content-center h-100">
                <b-col lg="10">
                    <div class="sign-user_card">
                        <b-form class="mt-4" id="change-email-form" method="POST">
                        <b-row>
                            <b-col lg="3"></b-col>
                            <b-col lg="6" class="device-margin">
                                <div class="change-email-from">
                                    <h4 class="mb-3">Change Email</h4>
                                        <input type="hidden" id="userId" name="userId" :value="user.id">
                                        <b-form-group>
                                            <label>New Email</label>
                                            <b-form-input type="email" class="form-control mb-0" id="email" name="email"
                                                placeholder="" autocomplete="off" :value="user.email" required />
                                        </b-form-group>
                                        <div class="d-flex">
                                            <a href="#" @click="handleSubmit" class="btn btn-hover">Save</a>
                                            <router-link :to="{name: 'landing-page.profile-setting'}" class="btn btn-link">Cancel</router-link>
                                        </div>
                                </div>
                            </b-col>
                        </b-row>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
import { core } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'ChangeEmail',
  components: {
  },
  mounted () {
    core.index()

    // $('#profile-form #gender').val(this.user.profile.gender)
    // $('#profile-form #lang').val(this.user.lang)
  },
  data () {
    return {
    }
  },
  computed : {
    ...mapGetters({
        authStatus: 'Auth/authStatusState',
        user: 'Auth/userState',
    })
  },
  methods: {
      handleSubmit (e) {
          e.preventDefault()
          var formData = new FormData($('#change-email-form')[0])
          this.$store.dispatch('Auth/changeEmail', formData).then(() => {
              this.$router.push({name: 'landing-page.profile-setting'})
          })
      } 
  }
}
</script>
