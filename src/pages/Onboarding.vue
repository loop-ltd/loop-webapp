<script setup>
  import Header from "../components/app/Header.vue"

  const categories = [
    {
      name: "Dietary",
      items: [
        {selected: false, name: "Vegetarian"},
        {selected: false, name: "Gluten-free"},
        {selected: true, name: "Vegan"},
        {selected: false, name: "Kosher"},
        {selected: false, name: "Halal"},
        {selected: true, name: "Keto"},
        {selected: false, name: "Pescetarian"},
      ],
    },
    {
      name: "Lifestyle",
      items: [
        {selected: false, name: "Fitness"},
        {selected: true, name: "Yoga"},
        {selected: false, name: "Meditation"},
        {selected: false, name: "Cycling"},
        {selected: false, name: "Running"},
        {selected: false, name: "Swimming"},
        {selected: true, name: "Gym"},
      ],
    },
    {
      name: "Hobbies",
      items: [
        {selected: false, name: "Dog walking"},
        {selected: false, name: "Gardening"},
        {selected: false, name: "Cooking"},
        {selected: true, name: "Reading"},
        {selected: false, name: "Photography"},
        {selected: false, name: "Gaming"},
        {selected: false, name: "Music"},
      ],
    },
  ]
</script>
<template>
  <div ref="container" class="relative flex h-screen flex-col">
    <Header></Header>
    <div class="max-w-7xl px-4 my-4">
      <h1
        class="text-uigray-900 font-header font-bold text-2xl text-center my-4">
        TELL US MORE ABOUT YOU
      </h1>
      <p class="text-uigray-900 text-base text-center my-4">
        What interests you most? What you like to spend your free time on? Don't
        worry - we won't share this with anyone, it's just to help us find you
        the best deals.
      </p>
      <section v-for="cat in categories" class="mt-4">
        <h2 class="text-center font-bold">{{ cat.name }}</h2>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="item in cat.items"
            :key="item"
            class="text-sm rounded-full px-4 py-2 m-2"
            :class="
              item.selected
                ? 'bg-loop-500 text-white font-bold'
                : 'border border-uigray-300 text-uigray-800'
            ">
            {{ item.name }}
          </div>
        </div>
      </section>
      <div class="flex flex-col">
        <button
          class="bg-uigray-900 text-white font-bold rounded-md px-4 py-2 mt-4">
          Continue
        </button>
        <a href="#" class="text-uigray-900 text-sm text-center mt-4">
          Skip for now
        </a>
      </div>
    </div>
  </div>
</template>
