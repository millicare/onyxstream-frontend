<template>
  <div>
    <MovieSlider @filter="onFilter"/>
    <Popular :category="category"/>
    <International :category="category"/>
    <Recommend :category="category"/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import MovieSlider from './MovieCategoryPage/Slider'
import Popular from './MovieCategoryPage/PopularShow'
import International from './MovieCategoryPage/InternationalShow'
import Recommend from './MovieCategoryPage/Recommend'
export default {
  name: 'MovieCategory',
  components: {
    Popular,
    International,
    Recommend,
    MovieSlider
  },
  data () {
    return {
      category: null
    }
  },
  mounted () {
    core.index()
  },
  methods: {
    onFilter (category) {
      console.log(category)
      this.category = category;
    }
  }
}
</script>
