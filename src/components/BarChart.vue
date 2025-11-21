<template>
  <div class="w-full h-full flex flex-col justify-end font-sans">
    
    <div class="relative h-[200px] w-full">
      
      <div class="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
        <div v-for="tick in 4" :key="tick" class="w-full border-t border-gray-100 last:border-0"></div>
      </div>

      <div class="absolute -left-10 h-full hidden lg:flex flex-col justify-between text-xs text-gray-400 py-1 z-0">
        <span>200K</span>
        <span>100K</span>
        <span>50K</span>
        <span>0</span>
      </div>

      <div class="relative w-full h-full overflow-x-auto hide-scroll z-10">
        
        <div class="flex items-end justify-between h-full min-w-[600px] lg:min-w-full px-1">
          
          <div 
            v-for="(item, index) in processedData" 
            :key="index"
            class="group relative flex flex-col items-center gap-3 h-full justify-end w-[8px]"
          >
            
            <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-1.5 whitespace-nowrap z-50 pointer-events-none">
              <p class="text-xs text-gray-500 mb-0.5">Dia {{ item.dia }}</p>
              <p class="text-sm font-bold text-[#0641FC]">
                {{ formatCurrency(item.valor) }}
              </p>
              <div class="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r border-b border-gray-200 rotate-45"></div>
            </div>

            <div class="relative w-[8px] h-[172px] bg-[#F5F5F5] rounded-full overflow-hidden flex items-end">
              <div 
                class="w-full rounded-full transition-all duration-500 ease-out hover:brightness-110"
                :style="{ 
                  height: `${item.percentual}%`,
                  background: 'linear-gradient(180deg, #2FCD66 0%, #0641FC 100%)'
                }"
              ></div>
            </div>

            <span class="text-xs font-medium text-gray-400 group-hover:text-[#0641FC] transition-colors">
              {{ item.dia }}
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  mobile: {
    type: Boolean,
    default: false
  }
})

const formatCurrency = (val) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(val)
}

const processedData = computed(() => {
  if (!props.data || props.data.length === 0) return []
  // Ajuste aqui conforme sua lógica de negócio (dinâmico vs fixo)
  const maxValue = Math.max(...props.data.map(d => d.valor), 200000) 

  return props.data.map(item => {
    let percent = (item.valor / maxValue) * 100
    if (percent > 100) percent = 100
    if (item.valor > 0 && percent < 2) percent = 2

    return {
      ...item,
      percentual: percent
    }
  })
})
</script>

<style scoped>
/* Mantendo sua classe para esconder a barra de rolagem nativa */
.hide-scroll::-webkit-scrollbar {
  display: none;
}
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>