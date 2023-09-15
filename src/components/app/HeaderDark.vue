<script setup>
  import {computed} from "vue"
  import {useRoute} from "vue-router"
  import {Bars3Icon} from "@heroicons/vue/24/outline"
  import Avatar from "../common/Avatar.vue"

  const route = useRoute()

  const clip = computed(() => {
    return "path('M 0 50 C 30 80 360 80 390 50 L 390 0 L 0 0 z')"
  })

  const url = computed(() => {
    switch (route.path) {
      case "/supporters":
        return "/#/"
      default:
        return "/#/supporters"
    }
  })
</script>
<template>
  <div
    class="shrink-0 bg-gradient-to-br from-loopgray-500 to-loopgray-100 h-[80px]"
    :style="{clipPath: clip}">
    <div class="h-[40px] flex items-center justify-between px-4 mt-[10px]">
      <a href="/#/cards">
        <Avatar name="Edwin Groenendaal" size="sm"></Avatar>
      </a>
      <a :href="url" class="flex items-center space-x-2">
        <img src="/logo.png" class="w-6 h-6" />
        <span class="text-loop-600 font-bold">Loop</span>
      </a>
      <a href="/#/onboarding">
        <Bars3Icon class="h-6 w-6 text-white" />
      </a>
    </div>
  </div>
</template>
