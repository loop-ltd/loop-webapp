<script setup>
  const transactions = [
    {store: "Asda", when: "Just Now", cashback: 1.23, status: "Pending"},
    {store: "Mum", when: "Today", cashback: 5.86, status: "Pending"},
    {store: "Sam", when: "Today", cashback: 5.0, status: "Pending"},
    {store: "Nike Store", when: "Yesterday", cashback: 3.45, status: "Pending"},
    {store: "Tesco", when: "Yesterday", cashback: 5.01, status: "Pending"},
    {
      store: "Coffee Place",
      when: "Yesterday",
      cashback: 3.2,
      status: "Pending",
    },
    {store: "Nike Store", when: "Monday", cashback: 13.95, status: "Confirmed"},
    {store: "Sainburys", when: "9/9/2023", cashback: 8.2, status: "Confirmed"},
  ]
</script>
<template>
  <div class="max-w-7xl px-4 flex flex-col">
    <div
      v-for="t in transactions"
      :key="t.id"
      class="flex items-center justify-between py-2">
      <div class="text-uigray-800 font-normal text-sm w-1/4 truncate">
        {{ t.store }}
      </div>
      <div
        class="text-uigray-800 font-normal text-sm w-1/4 text-center truncate">
        {{ t.when }}
      </div>
      <div class="text-loop-600 font-normal text-sm w-1/4 text-center truncate">
        &pound;{{ t.cashback }}
      </div>
      <div
        class="text-uigray-800 font-normal text-sm w-1/4 text-center truncate">
        {{ t.status }}
      </div>
    </div>
  </div>
</template>
