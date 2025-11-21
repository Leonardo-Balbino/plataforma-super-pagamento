<template>
  <div class="relative w-20 h-20 lg:w-24 lg:h-24">
    <svg class="transform -rotate-90" viewBox="0 0 100 100">
      <!-- Background circle -->
      <circle
        cx="50"
        cy="50"
        r="40"
        :stroke="backgroundColor"
        stroke-width="8"
        fill="none"
      />
      <!-- Progress circle -->
      <circle
        cx="50"
        cy="50"
        r="40"
        :stroke="cor"
        stroke-width="8"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        class="transition-all duration-500"
      />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-sm text-[#2A2E33]">{{ percentual }}%</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  percentual: {
    type: Number,
    required: true
  },
  cor: {
    type: String,
    required: true
  }
})

const circumference = computed(() => 2 * Math.PI * 40) // radius = 40
const offset = computed(() => {
  const progress = props.percentual / 100
  return circumference.value * (1 - progress)
})

// Converte cor hex para rgba com opacidade
const backgroundColor = computed(() => {
  const hex = props.cor.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, 0.2)`
})
</script>

