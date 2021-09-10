<template>
    <section class="m-profile manage-p">
        <b-container class="h-100">
            <b-row class="align-items-center justify-content-center h-100">
                <b-col lg="10">
                    <div class="sign-user_card">
                        <b-form class="mt-4" id="change-password-form" method="POST">
                        <b-row>
                            <b-col lg="3"></b-col>
                            <b-col lg="6" class="device-margin">
                                <div class="change-password-from">
                                    <h4 class="mb-3">Change Password</h4>
                                        <input type="hidden" id="userId" name="userId" :value="user.id">
                                        <b-form-group>
                                            <label>Current Password</label>
                                            <b-form-input type="password" class="form-control mb-0" id="current-password" name="current_password"
                                                placeholder="" autocomplete="off" required />
                                        </b-form-group>
                                        <b-form-group >
                                            <label>New Password</label>
                                            <b-form-input type="password" class="form-control mb-0" id="new-password" placeholder="" name="new_password"/>
                                        </b-form-group>
                                        <b-form-group >
                                            <label>Confirm New Password</label>
                                            <b-form-input type="password" class="form-control mb-0" id="new-confirm-password" placeholder="" name="new_confirm_password"/>
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
  name: 'ChangePassword',
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
          var formData = new FormData($('#change-password-form')[0])
          let curPass = formData.get('current_password')
          let newPass = formData.get('new_password')
          let newCfmPass = formData.get('new_confirm_password')

          if (!curPass) {
              alert("Please enter current password")
              return false
          }
          if (!newPass || newPass.length < 8) {
              alert("Please enter valid password. password length is at least greater than 8")
              return false
          }
          if (!newCfmPass || newCfmPass.length < 8) {
              alert("Please enter valid password. password length is at least greater than 8")
              return false
          }
          if (newPass != newCfmPass) {
              alert("Please ensure confirm password does match")
              return false
          }
          this.$store.dispatch('Auth/changePassword', formData).then(() => {
              this.$router.push({name: 'landing-page.profile-setting'})
          })
      } 
  }
}
</script>
