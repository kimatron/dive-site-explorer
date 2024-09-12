<template>
  <div class="dive-site-map">
    <h2>Dive Site Map</h2>
    <div id="mapContainer">
      <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :use-global-leaflet="false" style="height: 600px;">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="site in diveSites" :key="site.id" :lat-lng="site.coordinates" @click="showSiteInfo(site)">
          <l-popup>
            <div>
              <h3>{{ site.name }}</h3>
              <p>{{ site.description }}</p>
              <router-link :to="{ name: 'DiveSiteDetail', params: { id: site.id } }">View Details</router-link>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

export default {
  name: 'DiveSiteMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      center: [0, 0],
      zoom: 2,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      diveSites: [
        { id: 1, name: 'Great Blue Hole', coordinates: [17.3160, -87.5351], description: 'Famous for its circular shape and deep blue color.' },
        { id: 2, name: 'Barracuda Point', coordinates: [4.1141, 118.6310], description: 'Known for its strong currents and schools of barracuda.' },
        { id: 3, name: 'SS Thistlegorm', coordinates: [27.8119, 33.9220], description: 'A WWII shipwreck in the Red Sea.' },
      ]
    }
  },
  mounted() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  },
  methods: {
    showSiteInfo(site) {
      console.log(`Clicked on ${site.name}`);
      // We'll expand this method later to show more details or navigate to a detail page
    }
  }
}
</script>

<style scoped>
.dive-site-map {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>