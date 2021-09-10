<template>
   <section class="container-fluid seasons">
        <div class="iq-custom-select d-inline-block sea-epi s-margin">
            <V-select :options="sessonOption" v-model="selected">
            <option disabled value="0">Select one</option>
            </V-select>
         </div>
         <ul class="trending-pills d-flex nav nav-pills align-items-center text-center s-margin" role="tablist">
            <li class="nav-item">
               <a class="nav-link active show" data-toggle="pill" href="#episodes" role="tab"
                  aria-selected="true">Episodes</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" data-toggle="pill" href="#popularclips" role="tab" aria-selected="false">Popular
                  Clips</a>
            </li>
         </ul>
         <div class="tab-content">
             <div id="episodes" class="tab-pane fade active show" role="tabpanel">
                 <div class="block-space">
                     <b-row>
                        <b-col  md="6" class="col-1-5 iq-mb-30" v-for="(item,index) in episodeList" :key="index">
                            <div v-if="item.season == selected" class="epi-box">
                                <div class="epi-img position-relative">
                                    <img :src="'http://localhost:8001/' + item.file" class="img-fluid img-zoom" alt="">
                                    <div class="episode-number">{{item.episode}}</div>
                                    <div class="episode-play-info">
                                        <div class="episode-play">
                                            <router-link :to="{ name: 'landing-page.category-detail', params: {eId: item.id}}">
                                            <i class="ri-play-fill"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="epi-desc p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="text-white">{{item.date}}</span>
                                        <span class="text-primary">{{item.duration}}</span>
                                    </div>
                                    <router-link :to="{ name: 'landing-page.category-detail' }">
                                        <h6 class="epi-name text-white mb-0">{{item.name}}</h6>
                                    </router-link>
                                </div>
                            </div>
                        </b-col>
                     </b-row>
                 </div>
             </div>
             <div id="popularclips" class="tab-pane fade" role="tabpanel">
                 <div class="block-space">
                     <b-row>
                        <b-col  md="6" class="col-1-5 iq-mb-30" v-for="(item,index1) in episodeList" :key="index1">
                            <div v-if="item.season == selected" class="epi-box">
                                <div class="epi-img position-relative">
                                     <img :src="'http://localhost:8001/' + item.file" class="img-fluid img-zoom" alt="">
                                    <div class="episode-number">{{item.episode}}</div>
                                    <div class="episode-play-info">
                                        <div class="episode-play">
                                            <router-link :to="{ name: 'landing-page.category-detail', params: {eId: item.id}}">
                                            <i class="ri-play-fill"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="epi-desc p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="text-white">{{item.date}}</span>
                                        <span class="text-primary">{{item.duration}}</span>
                                    </div>
                                    <router-link :to="{ name: 'landing-page.category-detail' }">
                                        <h6 class="epi-name text-white mb-0">{{item.name}}</h6>
                                    </router-link>
                                </div>
                            </div>
                        </b-col>
                     </b-row>
                 </div>
             </div>
         </div>
      </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sesson',
  props: ['sId'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
      selected: 1,
      sessonOption: [
        { id: 1, value: 'season1', text: 'Season 1' },
        { id: 2, value: 'season2', text: 'Season 2' },
        { id: 3, value: 'season3', text: 'Season 3' },
        { id: 4, value: 'season4', text: 'Season 4' },
        { id: 5, value: 'season5', text: 'Season 5' },
      ],
    }
  },
    computed: {
    ...mapGetters({
      showList: 'Show/showState',
    }),
    episodeList () {
      let suitFor = function (item) {
         return item.id == this;
      }
      var show = this.showList.find(suitFor, this.sId)
      return show.episodes
    }
  }
}
</script>
