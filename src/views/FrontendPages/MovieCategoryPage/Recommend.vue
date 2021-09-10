<template>
<section id="iq-suggestede">
    <b-container>
        <b-row>
            <b-col sm="12" class="overflow-hidden">
                <div class="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 class="main-title">Onyx Recommendations</h4>
                </div>
                <div class="favorites-contens">
                    <Slick class="favorites-slider list-inline  row p-0 mb-0" :option="sliderOption">
                        <li class="slide-item" v-for="(item,index) in sliderData" :key="index">
                            <router-link :to="{ name: 'landing-page.movie-detail', params: {mId: item.id}}">
                                <div class="block-images position-relative">
                                    <div class="img-box">
                                    <img :src="'http://localhost:8001/' + item.file" class="img-fluid" alt="">
                                    </div>
                                    <div class="block-description">
                                    <h6>{{item.title}}</h6>
                                    <div class="movie-time d-flex align-items-center my-2">
                                        <div class="badge badge-secondary p-1 mr-2">{{item.age}}</div>
                                        <span class="text-white">{{item.duration}}</span>
                                    </div>
                                    <div class="hover-buttons">
                                        <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now</span>
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
  name: 'Recommend',
  components: {
  },
  props: ['category'],
  mounted () {
  },
  data () {
    return {
      // sliderData: [
      //   { image: require('../../../assets/images/frontend/tvthrillers/01.jpg'), title: 'Mission Moon', age: '15+', series: '2 Seasons' },
      //   { image: require('../../../assets/images/frontend/tvthrillers/05.jpg'), title: 'Day of Darkness', age: '15+', series: '2 Seasons' },
      //   { image: require('../../../assets/images/frontend/tvthrillers/03.jpg'), title: 'Knight Mare', age: '15+', series: '2 Seasons' },
      //   { image: require('../../../assets/images/frontend/tvthrillers/09.jpg'), title: 'Day of Darkness', age: '15+', series: '2 Seasons' },
      //   { image: require('../../../assets/images/frontend/tvthrillers/05.jpg'), title: 'Day of Darkness', age: '15+', series: '2 Seasons' },
      //   { image: require('../../../assets/images/frontend/tvthrillers/08.jpg'), title: 'Friends', age: '15+', series: '2 Seasons' }
      // ],
      sliderOption: {
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
    sliderData () {
      let cmapItem = this.cmapList['movie-section3']
      let recommendList = []

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
              if (favoItem.category == this.category || !this.category)
                recommendList.push(favoItem)
            }
         }
         else if (cType == 'show')
         {
            if (favoItem = this.showList.find(MatchRule1, cId)) {
              if (log = this.likeLogList.find(MatchRule2, {type: 'show', id: favoItem.id}))
                  favoItem.like = true
              if (favoItem.category == this.category || !this.category)
                recommendList.push(favoItem)
            }
         }
      }
      return recommendList
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
