<template>
      <div class="container">
        <div class="row justify-content-center align-items-center height-self-center">
            <div class="col-lg-5 col-md-12 align-self-center">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3">Change Password</h3>
                        <form class="mt-4" @submit="onSubmit">
                          <div class="form-group">
                            <input type="email" v-model="contact.email" class="form-control mb-0" id="email" name="email" placeholder="Enter email" autocomplete="off" required>
                          </div>
                          <div class="form-group">
                            <input type="password" v-model="contact.password" class="form-control mb-0" id="password" name="password" placeholder="Enter Password" autocomplete="off" required>
                          </div>
                          <div class="form-group">
                            <input type="password" v-model="contact.password_confirmation" class="form-control mb-0" id="password-confirm" name="password_confirmation" placeholder="Confirm Password" autocomplete="off" required>
                          </div>
                          <input type="hidden" name="_token" :value="csrf">
                          <div class="sign-info">
                            <button type="submit" class="btn btn-hover">Reset Password</button>
                          </div>
                        </form>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'RecoverPassword1',
  props: ['token'],
  data () {
    return {
        csrf: null,
        contact: {
            email: '',
            password: '',
            passwordToken: this.token,
            password_confirmation: '',
        }
    }
  },
  created () {
    this.csrf = document.querySelector('meta[name="csrf-token"]').content
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      let form = new FormData();
      for (let field in this.contact) {
          form.append(field, this.contact[field]);
      }
      // Send form to server	
      this.$store.dispatch('Extra/resetPassword', form).then((response) => {
          this.$router.push({name: 'auth1.sign-in1'})
          console.log(response)
      })
      return false
    }
  }
}
</script>
