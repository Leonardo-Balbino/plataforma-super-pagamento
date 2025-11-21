<template>
  <header class="block lg:hidden bg-secondary text-white">
    <!-- Status Bar -->
    <div class="flex items-center justify-between px-4 pt-2 pb-1">
      <span class="text-sm font-medium">19:02</span>
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <div class="w-6 h-3 border border-white rounded-sm">
          <div class="w-4 h-2 bg-white rounded-sm m-0.5"></div>
        </div>
      </div>
    </div>

    <!-- Account Selector -->
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex items-center gap-2">
        <div class="bg-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
          <div class="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <span class="text-secondary text-xs font-bold">S</span>
          </div>
          <span class="text-sm font-medium">Empresarial</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p class="text-xs opacity-90">Actis Pagamentos</p>
      </div>
      <button class="p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
    </div>

    <!-- Faturamento Section -->
    <div class="px-4 pb-4">
      <div class="flex items-center justify-between mb-2">
        <h1 class="text-2xl font-bold">Faturamento</h1>
        <button class="p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
      <p class="text-3xl font-bold mb-2">{{ formatCurrency(faturamento) }}</p>
      <a href="#" class="text-sm opacity-90 flex items-center gap-1">
        Ir para a carteira
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  faturamento: {
    type: Number,
    default: 0
  }
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
</script>

