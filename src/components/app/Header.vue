<script setup>
  import {Bars3Icon, ChevronLeftIcon} from "@heroicons/vue/24/outline"
</script>
<template>
  <div class="bg-white h-[40px] flex items-center justify-between px-2 py-4">
    <div class="flex items-align space-x-1">
      <ChevronLeftIcon class="text-loop-600 w-6 h-6"></ChevronLeftIcon>
      <span class="font-bold text-loop-600">Back</span>
    </div>
    <div class="flex items-center space-x-2">
      <img src="/logo.png" class="w-6 h-6" />
      <span class="text-uigray-900 font-bold">Loop</span>
    </div>
    <div class="flex items-align space-x-1">
      <span class="font-bold text-loop-600">Learn more</span>
    </div>
  </div>
</template>
