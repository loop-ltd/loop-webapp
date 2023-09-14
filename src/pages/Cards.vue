<script setup>
  import Header from "../components/app/Header.vue"
  import Card from "../components/loop/Card.vue"

  const cards = [
    {
      lastFour: "1234",
      provider: "Visa",
      expiry: "12/24",
      id: 1,
    },
    {
      lastFour: "5678",
      provider: "Visa",
      expiry: "12/28",
      id: 2,
    },
  ]
</script>

<template>
  <div ref="container" class="relative flex h-screen flex-col">
    <Header></Header>
    <div class="max-w-7xl px-4 my-4">
      <h1
        class="text-uigray-900 font-header font-bold text-2xl text-center my-4">
        LINK YOUR CARDS
      </h1>
      <p class="text-uigray-900 text-base text-center my-4">
        Add your debit and credit cards here. These will be linked to your
        affiliate programmes, so you can earn cashback when you spend.
      </p>

      <div class="flex flex-col items-center">
        <Card
          v-for="card in cards"
          :key="card.id"
          :lastFour="card.lastFour"
          :expiry="card.expiry"
          :provider="card.provider"></Card>
      </div>

      <div class="flex flex-col">
        <button
          class="bg-uigray-900 text-white font-bold text-base px-4 py-2 rounded-md mt-4">
          Add card
        </button>
        <a href="#" class="text-uigray-900 text-sm text-center mt-4">
          Skip for now
        </a>
      </div>
    </div>
  </div>
</template>
