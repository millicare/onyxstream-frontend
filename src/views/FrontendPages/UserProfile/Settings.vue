<template>
<div>
<section class="m-profile setting-wrapper">
    <b-container>
        <h4 class="main-title mb-4">Account Setting</h4>
        <b-row>
            <b-col lg="4" class="mb-3">
                <div class="sign-user_card text-center">
                    <img v-if="user.profile.image" :src="'http://localhost:8001/' + user.profile.image" class="rounded-circle img-fluid d-block mx-auto mb-3" alt="user">
                    <img v-else src="../../../assets/images/frontend/user/user.jpg" class="rounded-circle img-fluid d-block mx-auto mb-3" alt="user">
                    <h4 class="mb-3">{{user.profile.firstName + ' ' + user.profile.lastName}}</h4>
                    
                    <router-link :to="{name:'landing-page.manage-profile'}" class="edit-icon text-primary">Edit</router-link>
                </div>
            </b-col>
            <b-col lg="8">
                <div class="sign-user_card">
                    <h5 class="mb-3 pb-3 a-border">Personal Details</h5>    
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-md-8">
                            <span class="text-light font-size-13">Email</span>
                            <p class="mb-0">{{ user.email }}</p>
                        </div>
                        <div class="col-md-4 text-md-right text-left">
                            <router-link :to="{name: 'landing-page.change-email'}" class="text-primary">Change</router-link>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-md-8">
                            <span class="text-light font-size-13">Password</span>
                            <p class="mb-0">*****************</p>
                        </div>
                        <div class="col-md-4 text-md-right text-left">
                            <router-link :to="{name: 'landing-page.change-password'}" class="text-primary">Change</router-link>
                        </div>
                    </div>
                    <h5 class="mb-3 mt-4 pb-3 a-border">Billing Details</h5>
                    <div class="row justify-content-between mb-3">
                        <div class="col-md-8 r-mb-15">
                            <p>Your next billing date is 19 September 2020.</p>
                            <a href="#" class="btn btn-hover">Cancel Membership</a>
                        </div>
                        <div class="col-md-4 text-md-right text-left">
                            <router-link :to="{name:'landing-page.pricing-planning'}" class="text-primary">Update Payment info</router-link>
                        </div>
                    </div>
                    <!-- <h5 class="mb-3 mt-4 pb-3 a-border">Plan Details</h5>
                    <div class="row justify-content-between mb-3">
                        <div class="col-md-8">
                            <p>Premium</p>
                        </div>
                        <div class="col-md-4 text-md-right text-left">
                            <router-link :to="{ name: 'landing-page.pricing-planning' }" class="text-primary">Change Plan</router-link>
                        </div>
                    </div> -->
                    <h5 class="mb-3 pb-3 mt-4 a-border">Setting</h5>
                    <div class="row">
                        <div class="col-12 setting">
                            <a href="#" class="text-body d-block mb-1">Recent device streaming activity</a>
                            <a href="#" class="text-body d-block mb-1">Sign out of all devices </a>
                            <a href="#" class="text-body d-block">Download your person information</a>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</section>
</div>
</template>
<script>
import { core } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'Settings',
  components: {
  },
  mounted () {
    core.index()
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState'
    }),
  }
}
</script>
