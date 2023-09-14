<script setup>
  import HeaderDark from "../components/app/HeaderDark.vue"
  import LoanStatus from "../components/loop/LoanStatus.vue"
  import Transactions from "../components/loop/Transactions.vue"
</script>
<template>
  <div ref="container" class="relative flex h-screen flex-col">
    <HeaderDark></HeaderDark>
    <div class="max-w-7xl px-4 my-4">
      <h1 class="text-uigray-900 font-header font-bold text-2xl">
        WELCOME, EDWIN &#128075;
      </h1>
      <p class="text-uigray-700 text-base my-4 bg-loop-500 p-4 rounded-md">
        This week was a good week! You and your loop together earned you
        <span class="font-bold">&pound;126</span> &#129297; toward your student
        loan.
      </p>
      <h2 class="text-uigray-900 font-bold text-2xl my-8">My cashback</h2>
      <LoanStatus></LoanStatus>
    </div>
    <h1
      class="bg-gradient-to-br from-loopgray-500 to-loopgray-100 my-8 px-4 flex flex-col">
      <div class="text-white font-bold text-2xl text-center">Transactions</div>
      <div class="max-w-7xl py-2 flex justify-between items-align">
        <div class="text-white font-bold text-sm w-1/4">Store</div>
        <div class="text-white font-bold text-sm w-1/4 text-center">When</div>
        <div class="text-white font-bold text-sm w-1/4 text-center">
          Cashback
        </div>
        <div class="text-white font-bold text-sm w-1/4 text-center">Status</div>
      </div>
    </h1>
    <Transactions></Transactions>
  </div>
</template>
