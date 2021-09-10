<template>
      <div class="container">
        <div class="row justify-content-center align-items-center height-self-center">
            <div class="col-lg-5 col-md-12 align-self-center">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3">Reset Password</h3>
                        <p class="text-body">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form class="mt-4" @submit="onSubmit">
                          <div class="form-group">
                            <input type="email" v-model="contact.email" class="form-control mb-0" id="email" name="email" placeholder="Enter email" autocomplete="off" required>
                          </div>
                          <input type="hidden" name="_token" :value="csrf">
                          <div class="sign-info">
                            <button type="submit" class="btn btn-hover">Reset</button>
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
  data () {
    return {
      csrf: null,
      contact: {
        email: ''
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
      this.$store.dispatch('Extra/resetPasswordRequest', form).then((response) => {
          alert("Reset password request submitted successfuly. You will receive email within a few minutes.")
          console.log(response)
      })
      return false
    }
  }
}
</script>
