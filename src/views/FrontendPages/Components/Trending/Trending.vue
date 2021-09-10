<template>
  <section id="iq-trending" class="s-margin">
    <b-container fluid>
        <b-row>
          <b-col sm="12" class=" overflow-hidden">
              <div class="iq-main-header d-flex align-items-center justify-content-between">
                <h4 class="main-title">Trending</h4>
                <router-link :to="{ name: 'landing-page.show-category' }" class="text-primary">View all</router-link>
              </div>
              <div class="trending-contens">
                <Slick id="trending-slider-nav" class="list-inline p-0 mb-0 row align-items-center"  :option="trendingOption1">
                    <li v-for="(item,index) in trendingSlider" :key="index">
                      <a href="javascript:void(0);">
                          <div class="movie-slick position-relative">
                            <img :src="'http://localhost:8001/' + item" class="img-fluid" alt="">
                            <!-- <img :src="item" class="img-fluid" alt=""> -->
                          </div>
                      </a>
                    </li>
                </Slick>
                <Slick id="trending-slider" class="list-inline p-0 m-0  d-flex align-items-center" :option="trendingOption">
                  <li v-for="(item,index) in trendingList" :key="index">
                    <div class="tranding-block position-relative"  :style="'background-image:url(http://localhost:8001/' + item.file + ')'">
                      <div  class="trending-custom-tab">
                        <div class="tab-title-info position-relative">
                            <div class="tab-title-info position-relative">
                              <ul class="trending-pills tranding-tab-nav d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" data-toggle="pill" :href="'#trending-data1-' + index" role="tab" aria-selected="true">Overview</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" :href="'#trending-data2-' + index" role="tab" aria-selected="false">Episodes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" :href="'#trending-data3-' + index" role="tab" aria-selected="false">Trailers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" :href="'#trending-data4-' + index" role="tab" aria-selected="false">Similar Like This</a>
                                </li>
                              </ul>
                            </div>
                            <div class="trending-content">
                              <div :id="'trending-data1-' + index" class="overview-tab tab-pane fade active show">
                                <div class="trending-info align-items-center w-100 animated fadeInUp">
                                    <a href="javascript:void(0);" tabindex="0">
                                      <div class="res-logo">
                                          <div class="channel-logo">
                                            <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="streamit">
                                          </div>
                                      </div>
                                    </a>
                                    <h1 class="trending-text big-title text-uppercase">{{ item.title }}</h1>
                                    <div class="d-flex align-items-center text-white text-detail">
                                      <span class="badge badge-secondary p-3">18+</span>
                                      <span class="ml-3">{{ item.seasons}} Seasons</span>
                                      <span class="trending-year">2020</span>
                                    </div>
                                    <div class="d-flex align-items-center series mb-4">
                                      <a href="javascript:void(0);"><img src="../../../../assets/images/frontend/trending/trending-label.png"
                                          class="img-fluid" alt=""></a>
                                      <span class="text-gold ml-3">#2 in Series Today</span>
                                    </div>
                                    <p class="trending-dec">{{ item.description }}</p>
                                    <div class="p-btns">
                                      <div class="d-flex align-items-center p-0">
                                          <router-link :to="{ name: 'landing-page.show-single', params:{ sId: item.id }}" class="btn btn-hover mr-2" tabindex="0"><i
                                            class="fa fa-play mr-2" aria-hidden="true"></i>Play Now</router-link>
                                          <a href="javascript:void(0);" class="btn btn-link" tabindex="0"><i class="ri-add-line"></i>My
                                          List</a>
                                      </div>
                                    </div>
                                    <div class="trending-list mt-4">
                                      <div class="text-primary title">Starring: <span class="text-body">Wagner
                                          Moura, Boyd Holbrook, Joanna</span>
                                      </div>
                                      <div class="text-primary title">Genres: <span class="text-body">Crime,
                                          Action, Thriller, Biography</span>
                                      </div>
                                      <div class="text-primary title">This Is: <span class="text-body">Violent,
                                          Forceful</span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div :id="'trending-data2-' + index" class="overlay-tab tab-pane fade">
                                <div
                                    class="trending-info align-items-center w-100 animated fadeInUp">
                                    <router-link :to="{ name: 'landing-page.landing-page' }" tabindex="0">
                                      <div class="channel-logo">
                                          <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                                      </div>
                                    </router-link>
                                    <h1 class="trending-text big-title text-uppercase">{{ item.title }}</h1>
                                    <div class="iq-custom-select d-inline-block sea-epi">
                                      <V-select :options="sessonOption" v-model="selected">
                                      <option disabled value="0">Select one</option>
                                      </V-select>
                                    </div>
                                    <div class="episodes-contens mt-4">
                                      <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0">
                                          <div class="e-item" v-for="(episode, index) in item.episodes" :key="index">
                                            <div v-if="episode.season == selected" class="block-image position-relative">
                                                <router-link :to="{ name: 'landing-page.category-detail', params:{eId: episode.id}}">
                                                <img :src="'http://localhost:8001/' + episode.file" class="img-fluid" alt="">
                                                </router-link >
                                                <div class="episode-number">{{ episode.episode}}</div>
                                                <div class="episode-play-info">
                                                  <div class="episode-play">
                                                      <a :to="{ name: 'landing-page.category-detail', params:{eId: episode.id}}" tabindex="0"><i
                                                        class="ri-play-fill"></i></a>
                                                  </div>
                                                </div>
                                            </div>
                                            <div v-if="episode.season == selected" class="episodes-description text-body mt-2">
                                                <div class="d-flex align-items-center justify-content-between">
                                                  <router-link  :to="{ name: 'landing-page.category-detail', params:{eId: episode.id}}">{{ episode.name }}</router-link >
                                                  <span class="text-primary">{{ episode.duration }}</span>
                                                </div>
                                                <p class="mb-0">{{ episode.description }}</p>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div :id="'trending-data3-' + index" class="overlay-tab tab-pane fade">
                                <div
                                    class="trending-info align-items-center w-100 animated fadeInUp">
                                    <a href="javascript:void(0);" tabindex="0">
                                      <div class="channel-logo">
                                          <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                                      </div>
                                    </a>
                                    <h1 class="trending-text big-title text-uppercase">{{item.title}}</h1>
                                    <div class="episodes-contens mt-4">
                                        <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0">
                                          <div class="e-item" v-for="(episode, index) in item.episodes" :key="index">
                                            <div class="block-image position-relative">
                                                <router-link  :to="{ name: 'landing-page.category-detail', params:{eId: episode.id}}">
                                                <img :src="'http://localhost:8001/' + episode.file" class="img-fluid" alt="">
                                                </router-link >
                                                <div class="episode-number">{{ episode.episode }}</div>
                                                <div class="episode-play-info">
                                                  <div class="episode-play">
                                                      <router-link  :to="{ name: 'landing-page.category-detail', params: {eId: episode.id}}" tabindex="0"><i
                                                        class="ri-play-fill"></i></router-link >
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="episodes-description text-body mt-2">
                                                <div class="d-flex align-items-center justify-content-between">
                                                  <router-link  :to="{ name: 'landing-page.category-detail', params: {eId: episode.id}}">{{ episode.name }}</router-link >
                                                  <span class="text-primary">{{ episode.duration }}</span>
                                                </div>
                                                <p class="mb-0">{{ episode.description }}
                                                </p>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div :id="'trending-data4-' + index" class="overlay-tab tab-pane fade">
                                <div
                                    class="trending-info align-items-center w-100 animated fadeInUp">
                                    <a href="javascript:void(0);" tabindex="0">
                                      <div class="channel-logo">
                                          <img src="../../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                                      </div>
                                    </a>
                                    <h1 class="trending-text big-title text-uppercase">{{item.title}}</h1>
                                    <div class="episodes-contens mt-4">
                                       <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0">
                                          <div class="e-item" v-for="(episode, index) in item.episodes" :key="index">
                                            <div class="block-image position-relative">
                                                <router-link  :to="{ name: 'landing-page.category-detail', params: {eId: episode.id}}">
                                                <img :src="'http://localhost:8001/' + episode.file" class="img-fluid" alt="">
                                                </router-link >
                                                <div class="episode-number">{{episode.episode}}</div>
                                                <div class="episode-play-info">
                                                  <div class="episode-play">
                                                      <router-link  :to="{ name: 'landing-page.category-detail', params: {eId: episode.id}}" tabindex="0"><i
                                                        class="ri-play-fill"></i></router-link >
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="episodes-description text-body mt-2">
                                                <div class="d-flex align-items-center justify-content-between">
                                                  <router-link  :to="{ name: 'landing-page.category-detail', params: {eId: episode.id}}">{{ episode.name }}</router-link >
                                                  <span class="text-primary">2.25 m</span>
                                                </div>
                                                <p class="mb-0">{{ episode.description }}
                                                </p>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  </li>
                </Slick>
              </div>
          </b-col>
        </b-row>
    </b-container>
  </section>
</template>
<script>
import MovieOverview from '../../../../StaticData/json/MovieOverview'
import { mapGetters } from 'vuex'
export default {
  name: 'Details',
  components: {
  },
  mounted () {
    var tabEl = document.getElementsByClassName('tranding-tab-nav')
    Array.from(tabEl).map((elem) => {
      elem.addEventListener('shown.bs.tab', function (e) {
        e.target.classList.add('show')
        e.relatedTarget.classList.remove('show')
      })
    })
  },
  data () {
    return {
      items: MovieOverview,
      // trendingSlider: [
      //   require('../../../../assets/images/frontend/trending/01.jpg'),
      //   require('../../../../assets/images/frontend/trending/02.jpg'),
      //   require('../../../../assets/images/frontend/trending/03.jpg'),
      //   require('../../../../assets/images/frontend/trending/04.jpg'),
      //   require('../../../../assets/images/frontend/trending/05.jpg'),
      //   require('../../../../assets/images/frontend/trending/06.jpg')
      // ],
      // episodData: [
      //   { image: require('../../../../assets/images/frontend/episodes/01.jpg'), title: 'Episode 1', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
      //   { image: require('../../../../assets/images/frontend/episodes/02.jpg'), title: 'Episode 2', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
      //   { image: require('../../../../assets/images/frontend/episodes/03.jpg'), title: 'Episode 3', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
      //   { image: require('../../../../assets/images/frontend/episodes/04.jpg'), title: 'Episode 4', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
      //   { image: require('../../../../assets/images/frontend/episodes/05.jpg'), title: 'Episode 5', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' }
      // ],
      selected: 1,
      sessonOption: [
        { id: 1, value: 'season1', text: 'Season 1' },
        { id: 2, value: 'season2', text: 'Season 2' },
        { id: 3, value: 'season3', text: 'Season 3' },
        { id: 4, value: 'season4', text: 'Season 4' },
        { id: 5, value: 'season5', text: 'Season 5' }
      ], 
      trendingOption1: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#trending-slider',
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      trendingOption: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#trending-slider-nav'
      }
    }
  },
  computed: {
    ...mapGetters({
      movieList: 'Movie/movieState',
      showList: 'Show/showState',
      cmapList: 'ContentMap/cmapState'
    }),
    trendingSlider () {
      var trnList = []
      for (var index in this.trendingList) 
        trnList.push(this.trendingList[index].file)  
      return trnList
    },
    trendingList () {
      this.cmapList.topten 
      let cmapItem = this.cmapList.trending
      let trendingList = []

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
               trendingList.push(favoItem)
         }
         else if (cType == 'show')
         {
            if (favoItem = this.showList.find(suitFor, cId))
               trendingList.push(favoItem)
         }
      }
      return trendingList
    }
  }
}
</script>
