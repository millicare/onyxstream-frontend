<template>
    <div>
    <div class="video-container iq-main-slider">
      <video class="video d-block" controls loop controlsList="nodownload">
         <source :src="'http://localhost:8001/' + movie.video_link" type="video/mp4">
      </video>
   </div>
    <section class="movie-detail container-fluid">
        <b-row>
            <b-col lg="12" class="col-lg-12">
                <div class="trending-info g-border">
                    <div class="d-flex" style="justify-content:space-between;">
                    <h1 class="trending-text big-title text-uppercase mt-0">{{ movie.title }}</h1>
                    <!-- <button type="button" class="btn btn-primary download mt-4" @click="downloadVideo">Download</button> -->
                    </div>
                    <ul class="p-0 list-inline d-flex align-items-center movie-content">
                        <li class="text-white">{{ movie.category }}</li>
                    </ul>
                    <div class="d-flex align-items-center text-white text-detail">
                        <span class="badge badge-secondary p-3">13+</span>
                        <span class="ml-3">{{ movie.duration }}</span>
                        <span class="trending-year">{{ movie.releseDate }}</span>
                    </div>
                    <div class="d-flex align-items-center series mb-4">
                        <a href="javascript:void();"><img src="images/trending/trending-label.png" class="img-fluid"
                            alt=""></a>
                        <span class="text-gold ml-3">#2 in Series Today</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">{{ movie.description }}</p>
                    <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                        <li><span @click="showComment"><i class="ri-add-line"></i></span></li>
                        <li :class="movie.like ? 'active' : ''"><span @click="iLikeit"><i class="ri-heart-fill"></i></span></li>
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
            </b-col>
        </b-row>
    </section>
    </div>
</template>
<style scoped>
    .download {
        height: 45px;
        border-radius: 5px!important;
    }
</style>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default {
  name: 'Detail',
  props: ['mId'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      movieList: 'Movie/movieState',
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState',
      likeLogList: 'LikeLog/likeLogState',
    }),
    movie () {
      let MatchRule1 = function (item) {
         return item.id == this;
      }
      let MatchRule2 = function (item) {
         return (item.content_id == this.id) && (item.content_type == this.type);
      } 
      var log
      let movie = this.movieList.find(MatchRule1, this.mId)
      if (log = this.likeLogList.find(MatchRule2, {type: 'movie', id: movie.id}))
            movie.like = true
      return movie
    }
  },
  methods: {
     showComment (e) {
        e.preventDefault()
        if (this.user && this.authStatus.loggedIn) {
            let cId = this.movie.id
            let cType = 'movie'
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
            this.$store.dispatch('LikeLog/postLike', {id: this.movie.id, type: 'movie', user: this.user.id}).then(() => {
                console.log('posted movie like successfully')   
            })
        }
     },
     downloadVideo () {
        //  this.$store.dispatch('Tracker/download', {content_type: 'movie', content_id: this.movie.id}).then(() => {
        //      axios.get('http://localhost:8001/' + this.movie.video_link, { responseType: 'blob', headers: {} })
        //     .then(response => {
        //         const blob = new Blob([response.data])
        //         const link = document.createElement('a')
        //         link.href = URL.createObjectURL(blob)
        //         link.download = "new.mp4"
        //         link.click()
        //         URL.revokeObjectURL(link.href)
        //     }).catch(console.error)
        //  })
     }
  }
}
</script>
