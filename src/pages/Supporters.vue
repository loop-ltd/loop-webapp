<script setup>
  import HeaderDark from "../components/app/HeaderDark.vue"
  import SupporterNetwork from "../components/loop/SupporterNetwork.vue"
  import SupporterFeed from "../components/loop/SupporterFeed.vue"

  const supporters = [
    {id: 1, name: "Hannah", url: "/supporter6.jpg"},
    {id: 2, name: "Mom", url: "/supporter1.jpg"},
    {id: 3, name: "Sam", url: "/supporter2.jpg"},
    {id: 4, name: "Sis", url: "/supporter3.jpg"},
    {id: 5, name: "Gran", url: "/supporter4.jpg"},
    {id: 6, name: "Uncle Pete", url: "/supporter5.jpg"},
    {id: 7, name: "Mary", url: "/supporter7.jpg"},
    {id: 8, name: "Jackie", url: "/supporter8.jpg"},
  ]

  const feed = [
    {id: 1, supporter: 1, when: "Just now", cashback: 8.21},
    {id: 2, supporter: 2, when: "Today", cashback: 9.36, thanked: "&#128075;"},
    {id: 3, supporter: 3, when: "Today", cashback: 5.12, thanked: "&#128075;"},
    {
      id: 4,
      supporter: 4,
      when: "Yesterday",
      cashback: 3.45,
      thanked: "&#127881;",
    },
    {
      id: 5,
      supporter: 5,
      when: "Yesterday",
      cashback: 1.03,
      thanked: "&#127881;",
    },
    {
      id: 6,
      supporter: 6,
      when: "27/7/2021",
      cashback: 31.23,
      thanked: "&#127881;",
    },
  ]
</script>
<template>
  <div ref="container" class="relative flex h-screen flex-col">
    <HeaderDark></HeaderDark>
    <div class="max-w-7xl px-4 my-4">
      <h2 class="text-uigray-900 font-bold text-2xl my-4">My supporters</h2>
      <SupporterNetwork
        :supporters="supporters"
        class="my-8"></SupporterNetwork>
    </div>
    <h1
      class="bg-gradient-to-br from-loopgray-500 to-loopgray-100 my-8 px-4 flex flex-col">
      <div class="text-white font-bold text-2xl text-center">
        Supporter Feed
      </div>
      <div class="max-w-7xl py-2 flex justify-between items-align">
        <div class="text-white font-bold text-sm w-1/4">Username</div>
        <div class="text-white font-bold text-sm w-1/4 text-center">When</div>
        <div class="text-white font-bold text-sm w-1/4 text-center">
          Cashback
        </div>
        <div class="text-white font-bold text-sm w-1/4 text-center">Thank</div>
      </div>
    </h1>
    <SupporterFeed :supporters="supporters" :feed="feed"></SupporterFeed>
  </div>
</template>
🎉 party popper Unicode: U+1F389, UTF-8: F0 9F 8E 89
