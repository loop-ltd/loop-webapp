<script setup>
  const myProps = defineProps({
    lastFour: {type: String, required: true},
    provider: {type: String, required: false, default: "Visa"},
    expiry: {type: String, required: true},
  })
</script>
<template>
  <div
    class="w-[300px] rounded-xl bg-gradient-to-br from-purple-800 to-indigo-700 text-white p-4 flex flex-col h-[150px] my-4 shadow-md">
    <div class="flex items-center grow justify-end">
      <div class="font-mono text-lg font-semibold text-right">
        ************{{ lastFour }}
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="font-mono text-base font-semibold">E F Groenendaal</div>
      <div class="font-mono text-base font-semibold">Exp. {{ expiry }}</div>
    </div>
  </div>
</template>
