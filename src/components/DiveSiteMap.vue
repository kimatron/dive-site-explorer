<template>
  <div class="dive-site-map">
    <h2>Dive Site Map</h2>
    <div id="mapContainer">
      <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :use-global-leaflet="false" style="height: 600px;">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker-cluster :options="clusterOptions">
          <l-marker v-for="site in diveSites" :key="site.id" :lat-lng="getLatLng(site)">
            <l-popup>
              <div>
                <h3>{{ site.name }}</h3>
                <p>{{ site.description }}</p>
                <p><strong>Difficulty:</strong> {{ site.difficulty }}</p>
                <router-link :to="{ name: 'DiveSiteDetail', params: { id: site.id } }">View Details</router-link>
              </div>
            </l-popup>
          </l-marker>
        </l-marker-cluster>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LMarkerCluster } from '@vue-leaflet/vue-leaflet';
import { mapGetters } from 'vuex';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';

export default {
  name: 'DiveSiteMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LMarkerCluster,
  },
  data() {
    return {
      center: [0, 0],
      zoom: 2,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      clusterOptions: { chunkedLoading: true, spiderfyOnMaxZoom: true }
    }
  },
  computed: {
    ...mapGetters(['getAllDiveSites']),
    diveSites() {
      return this.getAllDiveSites;
    }
  },
  methods: {
    getLatLng(site) {
      // This is a simplified method to generate coordinates based on the site's location
      // In a real app, you'd have actual latitude and longitude data for each site
      const locationSeed = site.location.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const lat = (locationSeed % 180) - 90; // Range: -90 to 90
      const lng = ((locationSeed * 2) % 360) - 180; // Range: -180 to 180
      return [lat, lng];
    }
  },
  mounted() {
    // Ensure proper icon paths
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.dive-site-map {
  @include card-style;
  max-width: 1000px;
  margin: 0 auto;
}
</style>