<script setup>
  import {EllipsisHorizontalCircleIcon} from "@heroicons/vue/24/outline"
  import {computed, defineProps} from "vue"

  const myProps = defineProps({
    supporters: {type: Array, required: true},
    feed: {type: Array, required: true},
  })

  const feed = computed(() => {
    return myProps.feed.map((t) => {
      const supporter = myProps.supporters.find((s) => s.id === t.supporter)
      return {
        name: !supporter ? "" : supporter.name,
        when: t.when,
        cashback: t.cashback.toLocaleString(),
        thanked: t.thanked,
      }
    })
  })
</script>
<template>
  <div class="max-w-7xl px-4 flex flex-col">
    <div
      v-for="t in feed"
      :key="t.id"
      class="flex items-center justify-between py-2">
      <div class="text-uigray-800 font-normal text-sm w-1/4 truncate">
        {{ t.name }}
      </div>
      <div
        class="text-uigray-800 font-normal text-sm w-1/4 text-center truncate">
        {{ t.when }}
      </div>
      <div class="text-loop-600 font-normal text-sm w-1/4 text-center truncate">
        &pound;{{ t.cashback }}
      </div>
      <div
        v-if="t.thanked"
        class="text-uigray-800 font-normal text-sm w-1/4 text-center truncate"
        v-html="t.thanked"></div>
      <div
        v-else
        class="text-uigray-600 font-normal text-sm w-1/4 flex justify-center">
        <EllipsisHorizontalCircleIcon
          class="w-6 h-6"></EllipsisHorizontalCircleIcon>
      </div>
    </div>
  </div>
</template>
