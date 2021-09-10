<template>
<footer class="mb-0">
         <div class="container-fluid">
            <div class="block-space">
               <div class="row">
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0">
                        <li><router-link :to="{ name: 'landing-page.landing-page' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'landing-page.movie-category' }">Movies</router-link></li>
                        <li><router-link :to="{ name: 'landing-page.show-category' }">Tv Shows</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.about-us' }">About Us</router-link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0">
                        <li><router-link :to="{ name: 'extra-pages.corporate-info' }">Coporate Information</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.privacy-policy' }">Privacy Policy</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.terms' }">Terms & Conditions</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.help' }">Help</router-link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0">
                        <li><router-link :to="{ name: 'extra-pages.faq' }">FAQ</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.contact-us' }">Cotact Us</router-link></li>
                        <li><router-link :to="{ name: 'extra-pages.legal-notice' }">Legal Notice</router-link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-12 r-mt-15">
                     <div class="d-flex">
                        <a href="https://m.facebook.com/Onyx-Streaming-555846708260764/?ref=bookmarks" class="s-icon">
                        <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="https://twitter.com/onyx_streaming" class="s-icon">
                        <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/onyx_streaming/" class="s-icon">
                        <i class="ri-instagram-fill"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyright py-2">
            <div class="container-fluid">
               <p class="mb-0 text-center font-size-14 text-body">ONYX - 2020 All Rights Reserved</p>
            </div>
         </div>
      </footer>
</template>
<script>

export default {
  name: 'Footer',
  components: {
  },
  mounted () {
  }
}
</script>
