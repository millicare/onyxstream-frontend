<template>
  <div>
    <Slider @filter="onFilter"/>
    <Popular :category="category"/>
    <International :category="category"/>
    <Recommend :category="category"/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Popular from './CategoryPage/PopularShow'
import Slider from './CategoryPage/Slider'
import International from './CategoryPage/InternationalShow'
import Recommend from './CategoryPage/Recommend'
export default {
  name: 'ShowCategory',
  components: {
    Popular,
    International,
    Recommend,
    Slider
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
