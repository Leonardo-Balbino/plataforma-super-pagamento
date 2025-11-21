<template>
  <div id="app">
    <Sidebar />
    
    <router-view />
    <BottomNav />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'
import MobileHeader from './components/layout/MobileHeader.vue'
import BottomNav from './components/layout/BottomNav.vue'
import DashboardService from './services/DashboardService'

const faturamentoTotal = ref(1249651.14)

onMounted(async () => {
  try {
    const data = await DashboardService.getDashboardData()
    faturamentoTotal.value = data.faturamento.total
  } catch (error) {
    console.error('Erro ao carregar faturamento:', error)
  }
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>

