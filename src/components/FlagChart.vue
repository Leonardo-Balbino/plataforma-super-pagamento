<template>
    <div class="w-full overflow-x-auto hide-scroll pb-2">
      <div class="flex items-end justify-between gap-4 min-w-[300px] h-[160px] px-2">
        
        <div 
          v-for="(bandeira, index) in data" 
          :key="index" 
          class="flex flex-col items-center gap-3 flex-1 group cursor-pointer"
        >
          <div class="relative w-2 h-[120px] bg-[#F3F4F6] rounded-full flex items-end">
            <div 
              class="w-full rounded-full bg-[#0641FC] transition-all duration-500 ease-out group-hover:bg-[#0537d6]"
              :style="{ height: `${bandeira.height}%` }"
            >
            </div>
          </div>
  
          <div class="h-6 flex items-center justify-center w-full">
             <div 
               v-html="bandeira.icon"
               class="flex items-center justify-center [&>svg]:h-6 [&>svg]:w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-200"
               :title="bandeira.nome"
             ></div>
          </div>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  </script>
  
  <style scoped>
  .hide-scroll::-webkit-scrollbar {
    display: none;
  }
  .hide-scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>