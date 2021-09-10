<template>
<section id="home" class="iq-main-slider p-0">
  <Slick id="home-slider" class="slider m-0 p-0" :option="homeSliderOption">
    <div class="slide slick-bg s-bg-1" v-for="(data,index) in sliderData" :key="index" :data-inx="index">
      <b-container fluid class="position-relative h-100">
        <div class="slider-inner h-100">
            <b-row class="align-items-center  h-100">
              <b-col xl="6" lg="12" md="12">
                  <a href="#">
                    <div class="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                        <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="streamit">
                    </div>
                  </a>
                  <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                    data-delay-in="0.6">{{data.title}}</h1>
                  <div class="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                    <span class="badge badge-secondary p-2">{{data.age}}12+</span>
                    <span class="ml-3">{{ data.duration ? data.duration : data.seasons + ' Seasons'}}</span>
                    <!-- <span class="ml-3">{{data.sesson}}</span> -->
                  </div>
                  <p data-animation-in="fadeInUp" data-delay-in="1.2">{{data.description}}</p>
                  <!-- <p data-animation-in="fadeInUp" data-delay-in="1.2">{{data.text}}</p> -->
                  <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                    <router-link v-if="data.episodes" :to="{ name: 'landing-page.show-single', params: { sId: data.id}}" class="btn btn-hover">
                      <i class="fa fa-play mr-2"
                        aria-hidden="true"></i>Play Now
                    </router-link>
                    <router-link v-else :to="{ name: 'landing-page.movie-detail', params: { mId: data.id}}" class="btn btn-hover"><i class="fa fa-play mr-2"
                        aria-hidden="true"></i>Play Now</router-link>
                    <!-- <router-link :to="{ name: 'landing-page.category-detail' }" class="btn btn-link">More details</router-link> -->
                  </div>
              </b-col>
            </b-row>
            <div class="trailor-video">
              <a target="_blank" rel="noopener noreferrer" href="#" class="trailer-trigger" style="display:none">None</a>
              <a v-if="data.trailer_link" @click="trailerView('http://localhost:8001/' + data.trailer_link)" class="video-open playbtn" target="_blank" rel="noopener noreferrer">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                    <polygon class='triangle' fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                    <circle class='circle' fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                  </svg>
                  <span class="w-trailor">Watch Trailer</span>
              </a>
            </div>
        </div>
      </b-container>
    </div>
  </Slick>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle"
          fill="none" stroke="currentColor">
          <circle r="20" cy="22" cx="22" id="test"></circle>
      </symbol>
    </svg>
</section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.log(123)
    const vm = this
    
    setTimeout(function () {
      $('.slide.slick-bg.s-bg-1').each(function (index) {
        const slideOrder = $(this).attr('data-inx')
        const bgImg = 'http://localhost:8001/' + vm.sliderData[slideOrder].file
        $(this).css('background-image', 'url(' + bgImg + ')')
      })
    }, 1000)
  },
  data () {
    return {
      // sliderData: [
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
      //   { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." }
      // ],
      homeSliderOption: {
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
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
      user: 'Auth/userState',
      authStatus: 'Auth/authStatusState'
    }),
    sliderData () {
      let cmapItem = this.cmapList['main-carousel'] 
      let crslList = []

      let suitFor = function (item) {
         return item.id == this;
      }
      
      for (var index in cmapItem)
      {
         let cType = cmapItem[index].content_type
         let cId = cmapItem[index].content_id
         var favoItem

         if (cType == 'movie')
         {
            if (favoItem = this.movieList.find(suitFor, cId))
               crslList.push(favoItem)
         }
         else if (cType == 'show')
         {
            if (favoItem = this.showList.find(suitFor, cId))
               crslList.push(favoItem)
         }
      }
      return crslList
    }
  },
  methods: {
    trailerView (link) {
      if (this.user && this.authStatus.loggedIn) {
        console.log('aaaaaa')
        $('.trailer-trigger').attr('href', link)
        $('.trailer-trigger')[0].click()
      } else {
        this.$router.push({name: 'auth1.sign-in1'})
      }
      console.log(link)
    }
  }
}
</script>
