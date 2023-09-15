<script setup>
  import {computed, defineProps} from "vue"

  const myProps = defineProps({
    supporters: {type: Array, required: true},
  })

  const firstRing = computed(() => {
    if (myProps.supporters.length === 0) return []

    const len = Math.min(myProps.supporters.length, 3)

    return positionSupporters(0, len, 35)
  })

  const secondRing = computed(() => {
    if (myProps.supporters.length <= 3) return []

    const len = Math.min(myProps.supporters.length - 3, 5)

    return positionSupporters(3, len, 50)
  })

  function positionSupporters(start, len, radius) {
    const initial = 0 == start ? 0 : (Math.PI * 2) / (start * 2)
    const angle = (Math.PI * 2) / len
    const result = []
    for (let i = start; i < start + len; i++) {
      const supporter = myProps.supporters[i]

      const x = (50 + Math.sin(initial + angle * i) * radius).toFixed(0)
      const y = (50 + Math.cos(initial + angle * i) * radius).toFixed(0)
      result.push({
        id: supporter.id,
        url: supporter.url,
        css: {left: `${x}%`, top: `${y}%`},
      })
    }

    return result
  }
</script>
<template>
  <div class="w-full flex items-center justify-center">
    <div class="relative w-[320px] h-[320px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="text-loop-600">
        <circle
          cx="50"
          cy="50"
          r="50"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5" />
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5" />
      </svg>
      <div class="absolute inset-0">
        <img
          class="absolute w-[40%] h-[40%] left-1/2 top-1/2 -ml-[20%] -mt-[20%] bg-loop-500 rounded-full overflow-hidden"
          src="/myself-avatar.jpg" />
        <img
          v-for="s in firstRing"
          :key="s.id"
          :src="s.url"
          class="border-white border-2 grayscale absolute w-[20%] h-[20%] -ml-[10%] -mt-[10%] rounded-full overflow-hidden"
          :style="s.css" />
        <img
          v-for="s in secondRing"
          :key="s.id"
          :src="s.url"
          class="border-white border-2 grayscale absolute w-[20%] h-[20%] -ml-[10%] -mt-[10%] rounded-full overflow-hidden"
          :style="s.css" />
      </div>
    </div>
  </div>
</template>
