<script setup>
  import {computed} from "vue"

  const total = 400000
  const paid = 125000
  const looped = 40000

  /*
  const paidPath = computed(() => {
    if (total === 0) return
    const paidPercentage = paid / total
    const paidAngle = paidPercentage * Math.PI * 2
    const startAngle = 0
    const endAngle = startAngle + paidAngle

    const outerStart = {
      y: 50 - Math.cos(startAngle) * 50,
      x: Math.sin(startAngle) * 50 + 50,
    }
    const innerStart = {
      y: 50 - Math.cos(startAngle) * 40,
      x: Math.sin(startAngle) * 40 + 50,
    }

    const outerEnd = {
      y: 50 - Math.cos(endAngle) * 50,
      x: Math.sin(endAngle) * 50 + 50,
    }

    const innerEnd = {
      y: 50 - Math.cos(endAngle) * 40,
      x: Math.sin(endAngle) * 40 + 50,
    }

    return `M ${outerStart.x} ${outerStart.y} A 50 50 0 ${
      paidAngle > Math.PI ? 1 : 0
    } 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A 40 40 0 ${
      paidAngle > Math.PI ? 1 : 0
    } 0 ${innerStart.x} ${innerStart.y} z`
  })
  */

  const paidPath = computed(() => {
    if (total === 0) return

    return createPath(total, 0, paid)
  })

  const loopedPath = computed(() => {
    if (total === 0) return

    return createPath(total, paid, looped)
  })

  const remainingPath = computed(() => {
    if (total === 0) return

    return createPath(total, paid + looped, total - paid - looped)
  })

  function createPath(total, start, amount) {
    const startPercentage = start / total
    const amountPercentage = amount / total

    const startAngle = startPercentage * Math.PI * 2
    const amountAngle = amountPercentage * Math.PI * 2
    const endAngle = startAngle + amountAngle

    const outerStart = {
      y: 50 - Math.cos(startAngle) * 50,
      x: Math.sin(startAngle) * 50 + 50,
    }
    const innerStart = {
      y: 50 - Math.cos(startAngle) * 40,
      x: Math.sin(startAngle) * 40 + 50,
    }

    const outerEnd = {
      y: 50 - Math.cos(endAngle) * 50,
      x: Math.sin(endAngle) * 50 + 50,
    }

    const innerEnd = {
      y: 50 - Math.cos(endAngle) * 40,
      x: Math.sin(endAngle) * 40 + 50,
    }

    return `M ${outerStart.x} ${outerStart.y} A 50 50 0 ${
      amountAngle > Math.PI ? 1 : 0
    } 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A 40 40 0 ${
      amountAngle > Math.PI ? 1 : 0
    } 0 ${innerStart.x} ${innerStart.y} z`
  }
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="w-[200px] h-[200px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="text-loop-600">
        <path fill="black" stroke="none" fill-opacity="1" :d="paidPath"></path>
        <path
          fill="currentColor"
          stroke="none"
          fill-opacity="1"
          :d="loopedPath"></path>
        <path fill="black" fill-opacity="0.1" :d="remainingPath"></path>
        <!-- L 10 50 A 40 40 0 0 1  -->
        <!--
        M50 0 A 50 50 0 1 1 0 50 
      --></svg>
    </div>
    <div class="flex flex-col space-y-4 items-stretch">
      <div
        class="rounded-md bg-loop-300 flex flex-col space-y-2 items-center px-4 py-2">
        <div class="text-uigray-900 text-xs font-bold">Loan Amount</div>
        <div class="text-uigray-900 text-sm font-bold">&pound;400,000</div>
      </div>
      <div
        class="rounded-md bg-loop-500 flex flex-col space-y-1 items-center px-4 py-2">
        <div class="text-white text-xs font-bold">Your cashback</div>
        <div class="text-white text-sm font-bold">&pound;1,120.21</div>
        <div class="text-white text-xs font-bold text-center">
          Total supporters<br />cashback
        </div>
        <div class="text-white text-sm font-bold">&pound;2,813</div>
      </div>
    </div>
  </div>
</template>
