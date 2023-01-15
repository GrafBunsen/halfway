<script setup lang="ts">
import {theme} from "@/models/theme";
</script>
<template>
    <div :class="{'dark':theme.dark}">
    <Transition name="slide-fade">
        <router-view />
    </Transition>
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-400px);
  opacity: 1;
}
</style>