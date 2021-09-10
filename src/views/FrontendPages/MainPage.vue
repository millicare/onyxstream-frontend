<template>
  <div>
    <Favorites/>
    <UpComming/>
    <TopTen/>
    <Suggested/>
    <Detail/>
    <Trending/>
    <Originals/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Favorites from './Components/Favorites/Favorite'
import Detail from './Components/Details/Detail'
import Suggested from './Components/Suggested/Suggestion'
import TopTen from './Components/TopTen/Top'
import Trending from './Components/Trending/Trending'
import Thrillers from './Components/TvThrillers/Thrillers'
import Originals from './Components/OnyxOriginal/Originals'
import UpComming from './Components/UpcomingMovie/Upcomming'
export default {
  name: 'MainPage',
  components: {
    Favorites,
    Detail,
    Suggested,
    TopTen,
    Trending,
    Thrillers,
    UpComming,
    Originals
  },
  mounted () {
    core.index()
  }
}
</script>
