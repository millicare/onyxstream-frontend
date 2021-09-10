<template>
    <section class="m-profile manage-p">
        <b-container class="h-100">
            <b-row class="align-items-center justify-content-center h-100">
                <b-col lg="10">
                    <div class="sign-user_card">
                        <b-form class="mt-4" id="profile-form" method="POST">
                        <b-row>
                            <b-col lg="2">
                                <div class="upload_profile d-inline-block">
                                <img v-if="user.profile.image" :src="'http://localhost:8001/' + user.profile.image" class="profile-pic rounded-circle img-fluid" alt="user">
                                <img v-else src="../../../assets/images/frontend/user/user.jpg" class="profile-pic rounded-circle img-fluid" alt="user">
                                <div class="p-image">
                                    <i class="ri-pencil-line upload-button"></i>
                                    <input class="file-upload" type="file" name="file" accept="image/*">
                                </div>
                                </div>
                            </b-col>
                            <b-col lg="10" class="device-margin">
                                <div class="profile-from">
                                    <h4 class="mb-3">Manage Profile</h4>
                                    
                                        <input type="hidden" id="userId" name="userId" :value="user.id">
                                        <b-form-group class="d-flex flex-md-row flex-column">
                                            <div class="d-inline-block">
                                                <label>First Name</label>
                                                <b-form-input type="text" class="form-control mb-0" id="fName" name="firstName"
                                                    placeholder="Enter Your First Name" autocomplete="off" :value="user.profile.firstName" required />
                                            </div>
                                            <div class="d-inline-block ml-4">
                                                <label>Last Name</label>
                                                <b-form-input type="text" class="form-control mb-0" id="lName" name="lastName"
                                                    placeholder="Enter Your Last Name" autocomplete="off" :value="user.profile.lastName" required />
                                            </div>
                                        </b-form-group>
                                        <b-form-group >
                                            <label>Date of Birth</label>
                                            <flat-pickr :config="config" class="form-control date-input basicFlatpickr mb-0" id="birthDate" placeholder="Select Date" name="birthDate" :value="user.profile.birthDate"/>
                                        </b-form-group>
                                        <b-form-group class="d-flex flex-md-row flex-column">
                                            <div class="iq-custom-select d-inline-block manage-gen">
                                                <b-form-select :options="options" class="form-control pro-dropdown" id="gender" name="gender" :value="user.profile.gender"></b-form-select>
                                            </div>
                                            <div class="iq-custom-select d-inline-block lang-dropdown manage-dd">
                                                <select class="form-control pro-dropdown" id="lang" name="lang" :value="user.profile.lang">
                                                    <option value="English">English</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Gujarati">Gujarati</option>
                                                    <option value="Bengali">Bengali</option>
                                                    <option value="Marathi">Marathi</option>
                                                    <option value="Tamil">Tamil</option>
                                                    <option value="Kannada">Kannada</option>
                                                </select>
                                            </div>
                                        </b-form-group>
                                        <div class="d-flex">
                                            <a href="#" @click="handleSubmit" class="btn btn-hover">Save</a>
                                            <router-link :to="{name: 'landing-page.landing-page'}" class="btn btn-link">Cancel</router-link>
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
  name: 'ManageProfile',
  components: {
  },
  mounted () {
    core.index()

    $('#profile-form #gender').val(this.user.profile.gender)
    $('#profile-form #gender').select2({theme: 'bootstrap4'}).trigger('change')
    $('#profile-form #lang').val(this.user.lang)
    $('#profile-form #lang').select2({theme: 'bootstrap4'}).trigger('change')
  },
  data () {
    return {
      selected: null,
      options: [
        { value: 'male', text: 'male' },
        { value: 'female', text: 'female' }
      ],
      config: {
        dateFormat: 'Y-m-d'
      }
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
          var formData = new FormData($('#profile-form')[0])
          let fName = formData.get('firstName')
          let lName = formData.get('lastName')
          let birthDate = formData.get('birthDate')
          let lang = formData.get('lang')

          if (!fName) {
              alert("Please enter your first name")
              return false
          }
          if (!lName) {
              alert("Please enter your last name")
              return false
          }
          if (!birthDate) {
              alert("Please select your birth date")
              return false
          }
          if (!lang) {
              alert("Please select your personal language")
              return false
          }
          this.$store.dispatch('Auth/updateProfile', formData).then(() => {
              this.$router.push({name: 'landing-page.profile-setting'})
          })
      } 
  }
}
</script>
