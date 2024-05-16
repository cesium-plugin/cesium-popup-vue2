<template class="main">
  <CesiumMap />
</template>

<script>
import CesiumMap from './cesium-map.vue'

export default {
  components: {
    CesiumMap,
  },
}
</script>

<style lang="scss">
.main {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
