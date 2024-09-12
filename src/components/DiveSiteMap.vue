<template>
  <div class="dive-site-map">
    <h2>Dive Site Map</h2>
    <div id="mapContainer" style="height: 400px;"></div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'DiveSiteMap',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      center: [0, 0],
      zoom: 2,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>