<template>
<section id="iq-favorites">
   <b-container fluid>
      <b-row>
         <b-col sm="12" class="overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
               <h4 class="main-title">Favorites</h4>
               <router-link :to="{ name: 'landing-page.movie-category' }" class="text-primary">View all</router-link>
            </div>
            <div class="upcoming-contens">
               <Slick class="favorites-slider list-inline row p-0 mb-0" :option="favOption">
                  <li class="slide-item" v-for="(item,index) in favoriteList" :key="index">
                     <router-link :to="item.episodes ? { name: 'landing-page.show-single', params: {sId: item.id}} : { name: 'landing-page.movie-detail', params: {mId: item.id}}">
                        <div class="block-images position-relative">
                           <div class="img-box">
                              <img :src="'http://localhost:8001/' + item.file " class="img-fluid" alt="">
                           </div>
                           <div class="block-description">
                              <h6>{{item.title}}</h6>
                              <div class="movie-time d-flex align-items-center my-2">
                                 <div class="badge badge-secondary p-1 mr-2">12</div>
                                 <span class="text-white">{{ item.duration ? item.duration : item.seasons + ' Seasons'}}</span>
                              </div>
                              <div class="hover-buttons">
                                 <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                 Play Now
                                 </span>
                              </div>
                           </div>
                           <div class="block-social-info" :itemId="item.id" :itemType="item.episodes ? 'show' : 'movie'">
                              <ul class="list-inline p-0 m-0 music-play-lists">
                                 <li><span><i class="ri-volume-mute-fill"></i></span></li>
                                 <li :class="item.like ? 'active' : ''"><span @click="iLikeit"><i class="ri-heart-fill"></i></span></li>
                                 <li><span @click="showComment"><i class="ri-add-line"></i></span></li>
                              </ul>
                           </div>
                        </div>
                     </router-link>
                  </li>
               </Slick>
            </div>
         </b-col>
      </b-row>
   </b-container>
</section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Favorite',
  components: {
  },
  mounted () {
     const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
         console.log("tablet")
      }
      if (
         /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
         )
      ) {
         console.log("mobile")
      }
      console.log("desktop")
  },
  data () {
    return {
      // favoriteList: [
      //   { image: require('../../../../assets/images/frontend/favorite/01.jpg'), title: 'The Last Breath', age: '5+', time: '2h 30m' },
      //   { image: require('../../../../assets/images/frontend/favorite/02.jpg'), title: 'Last Night', age: '22+', time: '2h 30m' },
      //   { image: require('../../../../assets/images/frontend/favorite/03.jpg'), title: '1980', age: '25+', time: '2h 30m' },
      //   { image: require('../../../../assets/images/frontend/favorite/04.jpg'), title: '1980', age: '25+', time: '2h 30m' },
      //   { image: require('../../../../assets/images/frontend/favorite/05.jpg'), title: '1980', age: '25+', time: '2h 30m' }
      // ],
      favOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
   computed: {
    ...mapGetters({
      movieList: 'Movie/movieState',
      showList: 'Show/showState',
      cmapList: 'ContentMap/cmapState',
      likeLogList: 'LikeLog/likeLogState',
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState'
    }),
    favoriteList () {
      let cmapItem = this.cmapList.favorite
      let favoList = []

      let MatchRule1 = function (item) {
         return item.id == this;
      }
      let MatchRule2 = function (item) {
         return (item.content_id == this.id) && (item.content_type == this.type);
      }  
      for (var index in cmapItem)
      {
         let cType = cmapItem[index].content_type
         let cId = cmapItem[index].content_id
         var favoItem
         var log
         if (cType == 'movie')
         {
            if (favoItem = this.movieList.find(MatchRule1, cId)) {
               if (log = this.likeLogList.find(MatchRule2, {type: 'movie', id: favoItem.id}))
                  favoItem.like = true
               favoList.push(favoItem)
            }
         }
         else if (cType == 'show')
         {
            if (favoItem = this.showList.find(MatchRule1, cId)) {
               if (log = this.likeLogList.find(MatchRule2, {type: 'show', id: favoItem.id}))
                  favoItem.like = true
               favoList.push(favoItem)
            }
         }
      }
      return favoList
    }
  },
  methods: {
     showComment (e) {
        e.preventDefault()
        if (this.user && this.authStatus.loggedIn) {
         let cId = $(e.target).closest('.block-social-info').attr('itemId')
         let cType = $(e.target).closest('.block-social-info').attr('itemType')
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
         let cId = $(e.target).closest('.block-social-info').attr('itemId')
         let cType = $(e.target).closest('.block-social-info').attr('itemType')
         this.$store.dispatch('LikeLog/postLike', {id:cId, type: cType, user: this.user.id}).then(() => { console.log('posted like successfully') })
        }
     }
  }
}
</script>
