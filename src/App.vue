<script setup lang="ts"></script>
<template>
  <div :class="{'dark':true}">
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
  transform: translateX(-500px);
  opacity: 0;
}
</style>