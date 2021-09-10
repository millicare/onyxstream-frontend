<template>
    <div>
    <div class="video-container iq-main-slider">
      <video class="video d-block" controls loop constrolslist="nodownload">
         <source :src="'http://localhost:8001/' + episode.video_link" type="video/mp4">
      </video>
    </div>
    <section class="movie-detail container-fluid">
        <b-row>
            <b-col lg="12">
                <div class="trending-info season-info g-border">
                    <h4 class="trending-text big-title text-uppercase mt-0">{{ title }}</h4>
                    <div class="d-flex align-items-center text-white text-detail episode-name mb-0">
                        <span>S{{ episode.season }}E{{ episode.episode }}</span>
                        <span class="trending-year">{{ episode.name}}</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">{{ episode.description }}</p>
                    <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
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
            </b-col>
        </b-row>
    </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Detail',
  props: ['eId'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
        title: ''
    }
  },
  computed: {
    ...mapGetters({
      showList: 'Show/showState',
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState'
    }),
    episode () {
      let suitFor = function (item) {
         return item.id == this;
      }
      var episode
      for (var sInx in this.showList)
      {
          let show = this.showList[sInx]
          episode = show.episodes.find(suitFor, this.eId)
          if (episode) {
            this.title = show.title
            break;
          }
      }
      return episode
    }
  },
  methods: {
     showComment (e) {
        e.preventDefault()
        if (this.user && this.authStatus.loggedIn) {
            let cId = this.episode.id
            let cType = 'episode'
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
            this.$store.dispatch('LikeLog/postLike', {id: this.episode.id, type: 'episode', user: this.user.id}).then(() => {
                console.log('posted episode like successfully')   
            })
        }
     }
  }
}
</script>
