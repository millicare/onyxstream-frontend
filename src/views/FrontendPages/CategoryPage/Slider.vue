<template>
      <section class="iq-main-slider p-0">
      <Slick id="tvshows-slider" :option="sliderOption">
         <div v-for="(item,index) in sliderData" :key="index">
            <router-link :to="{ name: 'landing-page.show-single', params: {sId: item.id}}">
               <div class="shows-img">
                  <img :src="'http://localhost:8001/' + item.file" class="w-100" alt="">
                  <div class="shows-content">
                     <h4 class="text-white mb-1">{{item.title}}</h4>
                     <div class="movie-time d-flex align-items-center">
                        <div class="badge badge-secondary p-1 mr-2">{{item.age}}</div>
                        <span class="text-white">{{item.seasons}} Seasons</span>
                     </div>
                  </div>
               </div>
            </router-link>
         </div>
      </Slick>
      <div class="dropdown genres-box">
        <b-dropdown id="dropdownMenuButton40" menu-class="three-column">
          <template v-slot:button-content>
            <b-link href="#" style="color:#fff"> Genres</b-link>
          </template>
          <!-- <b-dropdown-item @click="filterContent()">All</b-dropdown-item> -->
          <b-dropdown-item v-for="(item, index) in categoryList" @click="filterContent(item)" :key="index">
            {{ item.name }}
          </b-dropdown-item>
          <!-- <b-dropdown-item href="#">Share</b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
          <b-dropdown-item href="#">Punjabi</b-dropdown-item>
          <b-dropdown-item href="#" >English</b-dropdown-item>
          <b-dropdown-item href="#" >Comedies</b-dropdown-item>
          <b-dropdown-item href="#" >Action</b-dropdown-item>
          <b-dropdown-item href="#" >Romance</b-dropdown-item>
          <b-dropdown-item href="#">Dramas</b-dropdown-item>
          <b-dropdown-item href="#" >Bollywood</b-dropdown-item>
          <b-dropdown-item href="#" >Hollywood</b-dropdown-item>
          <b-dropdown-item href="#" >Children & Family</b-dropdown-item>
          <b-dropdown-item href="#">Award-Winning</b-dropdown-item> -->
        </b-dropdown>
      </div>
   </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Slider',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      // sliderData: [
      //   { image: require('../../../assets/images/frontend/shows-banner/show-1.jpg'), title: 'The Hero Camp', age: '18+', series: '3 Seasons' },
      //   { image: require('../../../assets/images/frontend/shows-banner/show-2.jpg'), title: 'The Hero Camp', age: '18+', series: '3 Seasons' },
      //   { image: require('../../../assets/images/frontend/shows-banner/show-3.jpg'), title: 'The Hero Camp', age: '18+', series: '3 Seasons' }
      // ],
      sliderOption: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
        prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
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
      categoryList: 'Category/categoryState'
    }),
    sliderData () {
      let cmapItem = this.cmapList['show-carousel'] 
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
    filterContent (item = null) {
      if (item == null)
        this.$emit('filter', item)
      else
        this.$emit('filter', item.name)
    }
  }
}
</script>
