<template>
  <div>
    <!-- <Loader /> -->
    <div v-if="movie_f && show_f && cmap_f && ctg_f && llog_f">
      <NavHeader :items="headerItem" :userprofile="profile" :homeURL="{ name: 'landing-page.landing-page' }"  :logo="logo" >
        <template slot="responsiveRight">
          <ul class="d-flex align-items-center justify-content-end list-inline m-0">
            <li class="nav-item nav-icon" v-nav-toggle>
              <a href="#" class="search-toggle device-search">
                <i class="ri-search-line"></i>
              </a>
              <div class="search-box iq-search-bar d-search">
                <form action="#" class="searchbox">
                  <input type="text" class="text search-input font-size-12" placeholder="Type here to search...">
                  <i class="search-link ri-search-line"></i>
                </form>
              </div>
            </li>
            <li class="nav-item nav-icon" v-nav-toggle>
              <a href="javascript:void(0)" class="search-toggle position-relative">
                <i v-if="notifyList.length == 0" i class="ri-notification-2-line"></i>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
                    class="noti-svg">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5" />
                </svg>
                <span v-if="notifyList.length > 0" class="bg-danger dots"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body">
                    <a v-for="(item, index) in notifyList" @click="confirmNotify(item)" class="iq-sub-card" :key="index">
                        <div class="media align-items-center">
                          <img v-if="item.icon!='none'" :src="'http://localhost:8001/' + item.icon" class="img-fluid mr-3 avatar-40"
                              alt="streamit" />
                          <div class="media-body">
                              <h6 class="mb-0 ">{{ item.body }}</h6>
                              <small class="font-size-12"> {{item.title }}</small>
                          </div>
                        </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li v-if="!authStatus.loggedIn" class="nav-item nav-icon" v-nav-toggle>
              <router-link :to="{name: 'auth1.sign-in1'}" class="ml-2">
                Sign In
              </router-link>
              <router-link :to="{name: 'auth1.sign-up1'}" class="ml-4" >
                Sign Up
              </router-link>
            </li>
            <li v-if="authStatus.loggedIn" class="nav-item nav-icon" v-nav-toggle>
              <a href="#" class="iq-user-dropdown search-toggle p-0 d-flex align-items-center">
                <img v-if="user.profile.image" :src="'http://localhost:8001/' + user.profile.image" class="img-fluid avatar-40 rounded-circle" alt="user">
                <img v-else :src="userProfile" class="img-fluid avatar-40 rounded-circle" alt="user">
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 pl-3 pr-3">
                    <router-link :to="{ name: 'landing-page.manage-profile' }" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                              <i class="ri-file-user-line text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                              <h6 class="mb-0 ">Manage Profile</h6>
                          </div>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'landing-page.profile-setting' }" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                              <i class="ri-settings-4-line text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                              <h6 class="mb-0 ">Settings</h6>
                          </div>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'landing-page.pricing-planning' }" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                              <i class="ri-settings-4-line text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                              <h6 class="mb-0 ">Pricing Plan</h6>
                          </div>
                        </div>
                    </router-link>
                    <router-link to="#" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                              <i class="ri-logout-circle-line text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                              <a href="#" role="button"
                                  @click="handleSubmit">
                                  <h6 class="mb-0 ">Logout</h6>
                              </a>
                              <form id="logout-form" action="/logout" method="POST" class="d-none">
                                <input type="hidden" :value="csrfToken" name="_token"/>
                              </form>
                          </div>
                        </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </NavHeader>
       <Home id="home" v-if="this.$route.meta.slider === 'true'"/>
       <!-- <Slider v-if="this.$route.meta.category" /> -->
       <!-- <MovieSlider v-if="this.$route.meta.movieslider"/> -->
        <!-- <BannerVideo v-if="this.$route.name == 'landing-page.movie-detail' || this.$route.name == 'landing-page.category-detail'"  /> -->
        <!-- <Banner v-if="this.$route.name == 'landing-page.show-single'"/> -->
        <div :class="this.$route.meta.mainClass == '' ? '' : 'main-content'">
            <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                        :leave-active-class="`animated ${animated.exit}`">
              <router-view/>
            </transition>
       </div>
    <Footer />
      <div id="back-to-top">
         <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
      </div>
    </div>
    <div v-if="authStatus.loggedIn" class="modal fade bd-example-modal-xl" id="commentModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content" style="background: var(--iq-body-bg)">
            <div class="modal-header">
                <h5 class="modal-title">Comment List</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <input type="hidden" id="content-type" name="content-type"/>
            <input type="hidden" id="content-id" name="content-type"/>
            <div class="modal-body">
              <div class="comment-list">
                <div v-for="(comment, index) in commentList" :key="index">
                  <div class="row">
                      <div class="col-md-12">
                          <p>{{ comment.description }}</p>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                    </div>
                    <div class="col-md-3">
                        <div class="media align-items-center">
                            <div class="iq-movie">
                                <a href="javascript:void(0);"><img
                                    :src="'http://localhost:8001/' + comment.author.image"
                                    class="img-border-radius avatar-50 img-fluid" alt=""></a>
                            </div>
                            <div class="media-body text-white text-left ml-3">
                                <p class="mb-0">{{ comment.author.firstName + ' ' + comment.author.lastName }}</p>
                                <small>{{ comment.date }}</small>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="new-comment mt-2">
                <input type="hidden" id="author" name="author" :value="user.id"/>
                <textarea rows="5" id="description" name="description" style="width:100%;" placeholder="Type here your comment"></textarea>
              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addComment">Save</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import Loader from '../components/core/loader/Loader'
import profile from '../assets/images/frontend/user/user.jpg'
import loader from '../assets/images/logo-full.png'
import Footer from '../views/FrontendPages/Components/Footer/Footer'
import Home from '../views/FrontendPages/Components/Home/Home'
import Slider from '../views/FrontendPages/CategoryPage/Slider'
import MovieSlider from '../views/FrontendPages/MovieCategoryPage/Slider'
import NavHeader from '../components/core/navbars/FrontendNav'
import BannerVideo from '../views/FrontendPages/MovieDetailPage/BannerVideo'
import Banner from '../views/FrontendPages/ShowSinglePage/Banner'
import Token from '../services/token'
import axios from 'axios'
import { mapGetters } from 'vuex'

import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/messaging'
import jwt_decode from 'jwt-decode'

export default {
  name: 'BackendLayout',
  components: {
    Footer,
    Loader,
    Home,
    NavHeader,
    Slider,
    MovieSlider,
    BannerVideo,
    Banner
  },
  mounted () {
    core.index()
    if (this.authStatus.loggedIn && this.user)
    {
      this.$store.dispatch('Notify/fetchNotifies').then(() => {

      })
      var config = {
        apiKey: "AIzaSyDPJUQty4N8VFb6mW3ZQXbUAjprbi4SR3A",
        authDomain: "onyx-streaming-f48c9.firebaseapp.com",
        projectId: "onyx-streaming-f48c9",
        storageBucket: "onyx-streaming-f48c9.appspot.com",
        messagingSenderId: "315099869447",
        appId: "1:315099869447:web:bb1c4c540faddf451cd5a2",
        measurementId: "G-HW8D7EL9V9"
      }

      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      const messaging = firebase.messaging()

      // messaging.usePublicVapidKey("<Public Vapid Key>")

      messaging.requestPermission().then(() => {
        console.log('Notification permission granted.')
        messaging.getToken().then((token) => {
          console.log('New token created: ', token)
          this.saveNotificationToken(token)
        })
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err)
      })

      messaging.onTokenRefresh(function () {
        messaging.getToken().then(function (newToken) {
          console.log('Token refreshed: ', newToken)
          this.saveNotificationToken(newToken)
        }).catch(function (err) {
          console.log('Unable to retrieve refreshed token ', err)
        })
      })
      var vm = this;
      messaging.onMessage(function(payload) {
        vm.$store.dispatch('Notify/receiveNew', payload).then(() => {
          
        })
      })
    }
  },
  created () {
    
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').content
    this.$store.dispatch("Movie/fetchMovies").then(() => {
      this.movie_f = true;
    });
    this.$store.dispatch("Show/fetchShows").then(() => {
      this.show_f = true;
    });
    this.$store.dispatch("Category/fetchCategories").then(() => {
      this.ctg_f = true;
    });
    this.$store.dispatch("ContentMap/fetchContentMap").then(() => {
      this.cmap_f = true;
    });
    this.$store.dispatch('LikeLog/fetchLikeLogs').then(() => {
      this.llog_f = true;
    })

    if (this.user && this.authStatus.loggedIn) {
      
        let vm = this
        let watcher = setInterval(function () {
          let token = Token.getToken()
          if (!token)
            clearInterval(watcher)
          let exp = jwt_decode(token).exp
          let now = new Date().getTime() / 1000
          if (exp - now <= 180 && exp - now >= 0) {
            vm.$store.dispatch("Auth/refresh").then(() => {
              
            })
          } 
          else if (now > exp) {
            clearInterval(watcher)
            vm.$store.dispatch("Auth/expired").then(() => {
              // vm.$router.push({name: 'landing-page.landing-page'})
            })
          }
        }, 1000)
    }
  },
  updated () {
    
  },
  data () {
    return {
      profile: '',
      movie_f: false,
      show_f: false,
      cmap_f: false,
      ctg_f: false,
      llog_f: false,
      animated: { enter: 'fadeInUp', exit: 'fadeOut' },
      userProfile: profile,
      onlyLogo: false,
      onlyLogoText: false,
      logo: loader,
      headerItem: [
        { title: 'Home', link: '/' },
        { title: 'Tv Shows', link: '/show-category' },
        { title: 'Movies', link: '/movie-category' }
      ]
    }
  },
  methods: {
    changeLogo (e) {
      this.logo = e
    },
    routerAnimationChange (e) {
      this.animated = e
    },
    handleSubmit (e) {
      e.preventDefault()
      this.$store.dispatch('Auth/logout').then(
        data => { 
          this.$router.push({name: 'landing-page.landing-page'})
        }
      )
    },
    addComment (e) {
      e.preventDefault()
      let description = $('.new-comment #description').val()
      if (!description) {
        alert("Please enter comment description")
        return false
      }
      this.$store.dispatch('Comment/post', {
        author: $('#commentModal #author').val(),
        cType:  $('#commentModal #content-type').val(),
        cId:  $('#commentModal #content-id').val(),
        description: $('#commentModal #description').val(),
      }).then(response => {
        $('#commentModal').modal('hide')
      })
    },
    saveNotificationToken(token) {
      const payload = {
        token: token,
        type: 'web'
      }
      this.$store.dispatch('Auth/saveDeviceToken', payload)
        .then((response) => {
          console.log('Successfully saved notification token!')
          console.log(response.data)
        })
        .catch((error) => {
          console.log('Error: could not save notification token')
          if (error.response) {
            console.log(error.response.status)
            // Most of the time a "this field must be unique" error will be returned,
            // meaning that the token already exists in db, which is good.
            if (error.response.data.registration_id) {
              for (let err of error.response.data.registration_id) {
                console.log(err)
              }
            } else {
              console.log('No reason returned by backend')
            }
            // If the request could not be sent because of a network error for example
          } else if (error.request) {
            console.log('A network error occurred.')
            // For any other kind of error
          } else {
            console.log(error.message)
          }
        })
    },
    confirmNotify (notify) {
      this.$store.dispatch('Notify/confirm', notify).then(() => {
        this.$router.push({name: notify.link});
      })
    }
  },
  computed: { 
    ...mapGetters({
      authStatus: 'Auth/authStatusState',
      user: 'Auth/userState',
      commentList: 'Comment/commentState',
      notifyList: 'Notify/notifyState',
    })
  }
}
</script>
<style lang="scss">
@import url("../assets/css/custom.css");
@import "../assets/scss/frontend.scss";
</style>
<style scoped>
  .new-comment textarea {
    background-color: var(--iq-bg1);
    color: white;
  }
</style>
