<template>
   <div>
   <section class="banner-wrapper overlay-wrapper iq-main-slider" :style="'background-image:url(http://localhost:8001/' + show.file + ')'">
      <div class="banner-caption">
         <div class="position-relative mb-4">
            <router-link :to="{ name: 'landing-page.category-detail', params: {eId: lstEId}}" class="d-flex align-items-center">
               <div class="play-button">
                  <i class="fa fa-play"></i>
               </div>
               <h4 class="w-name text-white font-weight-700">Watch latest Episode</h4>
            </router-link>
         </div>
         <ul class="list-inline p-0 m-0 share-icons music-play-lists">
            <li><span @click="showComment"><i class="ri-add-line"></i></span></li>
            <li><span @click="iLikeit"><i class="ri-heart-fill"></i></span></li>
            <li class="share">
               <span><i class="ri-share-fill"></i></span>
               <div class="share-box">
                  <div class="d-flex align-items-center">
                     <ShareNetwork
                        network="facebook"
                        url="https://news.vuejs.org/issues/180"
                        title=""
                        description=""
                        quote=""
                        hashtags=""
                     >
                        <i class="ri-facebook-fill"></i>
                     </ShareNetwork>
                     <ShareNetwork
                        network="twitter"
                        url="https://news.vuejs.org/issues/180"
                        title=""
                        description=""
                        quote=""
                        hashtags=""
                     >
                        <i class="ri-twitter-fill"></i>
                     </ShareNetwork>
                     <ShareNetwork
                        network="linkedin"
                        url="https://news.vuejs.org/issues/180"
                        title=""
                        description=""
                        quote=""
                        hashtags=""
                     >
                        <i class="ri-linkedin-fill"></i>
                     </ShareNetwork>
                     <!-- <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                     <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                     <a href="#" class="share-ico"><i class="ri-links-fill"></i></a> -->
                  </div>
               </div>
            </li>
         </ul>
      </div>
   </section>
    <section class="movie-detail container-fluid">
         <b-row>
            <b-col lg="12">
               <div class="trending-info g-border">
                  <h1 class="trending-text big-title text-uppercase mt-0">{{ show.title }}</h1>
                  <ul class="p-0 list-inline d-flex align-items-center movie-content">
                     <li class="text-white">{{ show.category }}</li>
                     <!-- <li class="text-white">Action</li>
                     <li class="text-white">Drama</li> -->
                  </ul>
                  <div class="d-flex align-items-center text-white text-detail">
                     <span class="badge badge-secondary p-3">18+</span>
                     <span class="ml-3">{{ show.seasons}} Seasons</span>
                     <!-- <span class="trending-year">2020</span> -->
                  </div>
                  <div class="d-flex align-items-center series mb-4">
                     <a href="javascript:void();"><img src="../../../assets/images/frontend/trending/trending-label.png" class="img-fluid"
                           alt=""></a>
                     <span class="text-gold ml-3">#2 in Series Today</span>
                  </div>
                  <p class="trending-dec w-100 mb-0">{{ show.description }}</p>
               </div>
            </b-col>
         </b-row>
      </section>
   </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Detail',
  props: ['sId'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
       lstEId:''
    }
  },
  computed: {
    ...mapGetters({
      showList: 'Show/showState',
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState'
    }),
    show () {
      let suitFor = function (item) {
         return item.id == this;
      }
      var show = this.showList.find(suitFor, this.sId)
      var len
      if ((len = show.episodes.length) > 1)
         this.lstEId = show.episodes[len - 1].id
      return show
    }
  },
  methods: {
     showComment (e) {
        e.preventDefault()
        if (this.user && this.authStatus.loggedIn) {
            let cId = this.show.id
            let cType = 'show'
            this.$store.dispatch('Comment/fetchComments', {content_type: cType, content_id: cId}).then(() => {
                $('#commentModal').modal('show')
                $('#commentModal #content-type').val(cType)
                $('#commentModal #content-id').val(cId)
                $('#commentModal #description').val('')
            })
        }
     },
     iLikeit (e) {
        e.preventDefault()
        if (this.user && this.authStatus.loggedIn) {
            this.$store.dispatch('LikeLog/postLike', {id: this.show.id, type:'show', user: this.user.id}).then(() => {
                console.log('posted show like successfully')   
            })
        }
     }
  }
}
</script>
