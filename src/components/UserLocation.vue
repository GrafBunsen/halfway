<script setup lang="ts">
import { ref } from 'vue';

var lat: number, long: number;
const userPosition = ref<number[]>([]); // Position of User according to geolocation API [latitude, longditude]
const stopsNearby = ref('');


navigator.geolocation.getCurrentPosition(function (position) {   //We dont use this unless we want to locate the User to find the next station faster
  lat = position.coords.latitude;
  long = position.coords.longitude;

  userPosition.value.push(lat, long)
});

</script>
<template>
</template>