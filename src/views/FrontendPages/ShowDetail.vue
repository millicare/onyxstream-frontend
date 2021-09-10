<template>
<div>
  <Detail :eId="$route.params.eId"/>
  <LatestEpisode :eId="$route.params.eId"/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Detail from './ShowDetailPage/Detail'
import LatestEpisode from './ShowDetailPage/LatestEpisode'
export default {
  name: 'ShowDetail',
  components: {
    Detail,
    LatestEpisode
  },
  mounted () {
    core.index()
  }
}
</script>
