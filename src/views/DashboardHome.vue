<template>
  <!-- Fundo cinza padrão da tela -->
  <div class="min-h-screen bg-[#edeff4]">
    

    <header class="lg:hidden bg-[#0641FC]  pt-12 pb-[18px] rounded-b-[32px] text-white relative z-10 mb-[-20px]">
      <div class="flex justify-between items-start mb-8 px-6">
        <!-- Dropdown Empresa -->
        <div class="flex items-center gap-3 bg-[#F0F0F0] p-[6px] rounded-full backdrop-blur-sm border border-white/20">
          <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="flex flex-col">          
            <span class="text-[10px] text-xs font-bold text-[#000] leading-tight">Empresarial</span>
            <span class="text-xs font-bold text-[#86898B] leading-tight">Astra Pagamentos</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M16.499 8.46V7.755C16.499 3.886 13.475 0.75 9.74896 0.75C6.02296 0.75 2.99896 3.886 2.99896 7.755V8.46C3.00017 9.30155 2.76001 10.1258 2.30696 10.835L1.19896 12.56C0.187964 14.135 0.959963 16.276 2.71896 16.774C7.31525 18.0757 12.1827 18.0757 16.779 16.774C18.538 16.276 19.31 14.135 18.299 12.561L17.191 10.836C16.7376 10.1269 16.4971 9.30265 16.498 8.461L16.499 8.46Z" stroke="#F0F0F0" stroke-width="1.5"/>
            <path d="M5.24896 17.75C5.90396 19.498 7.67096 20.75 9.74896 20.75C11.827 20.75 13.594 19.498 14.249 17.75M9.74896 4.75V8.75" stroke="#F0F0F0" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Sino Notificação -->
        <button class="p-2 relative">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          <span class="absolute top-2 right-2 w-2 h-2 rounded-full border border-[#0641FC]"></span>
        </button>
      </div>

      <!-- Bloco Saldo Principal -->
      <div>
        <div class="px-6">
          <p class="text-sm font-medium font-bold">Faturamento</p>
          <div class="flex items-center justify-between mt-1">
            <div class="flex items-baseline gap-1">
              <span class="text-base font-medium opacity-80">R$</span>
              <h1 class="text-[32px] font-bold tracking-tight">1.249.651,14</h1>
            </div>
            <button class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
          </div>
        </div>
        
        <button class=" mt-4 text-xs w-full font-semibold hover:opacity-80 border-t border-[#1E54FF]">
          <div class="px-6 flex items-center pt-[12px] justify-between w-full">
            Ir para a carteira
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
          </div>
         
        </button>
      </div>
      

    </header>

    <div 
      class="w-full px-6 mt-10 z-20 lg:hidden " 
    >
      <button 
        class="w-full h-[52px] flex items-center justify-between text-white rounded-full bg-[#2A2E33] btn-shadow-cob"
      >
        <span class="text-base font-semibold ml-6">
          Nova cobrança
        </span>
        
        <svg class="mr-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 29.3337C23.364 29.3337 29.3334 23.3643 29.3334 16.0003C29.3334 8.63633 23.364 2.66699 16 2.66699C8.63602 2.66699 2.66669 8.63633 2.66669 16.0003C2.66669 23.3643 8.63602 29.3337 16 29.3337ZM17 12.0003C17 11.7351 16.8947 11.4808 16.7071 11.2932C16.5196 11.1057 16.2652 11.0003 16 11.0003C15.7348 11.0003 15.4804 11.1057 15.2929 11.2932C15.1054 11.4808 15 11.7351 15 12.0003V15.0003H12C11.7348 15.0003 11.4804 15.1057 11.2929 15.2932C11.1054 15.4808 11 15.7351 11 16.0003C11 16.2655 11.1054 16.5199 11.2929 16.7074C11.4804 16.895 11.7348 17.0003 12 17.0003H15V20.0003C15 20.2655 15.1054 20.5199 15.2929 20.7074C15.4804 20.895 15.7348 21.0003 16 21.0003C16.2652 21.0003 16.5196 20.895 16.7071 20.7074C16.8947 20.5199 17 20.2655 17 20.0003V17.0003H20C20.2652 17.0003 20.5196 16.895 20.7071 16.7074C20.8947 16.5199 21 16.2655 21 16.0003C21 15.7351 20.8947 15.4808 20.7071 15.2932C20.5196 15.1057 20.2652 15.0003 20 15.0003H17V12.0003Z" fill="white"/>
        </svg>
      </button>
    </div>

    <!-- Header Desktop (Intacto) -->
    <DashboardHeader class="hidden lg:block" />

    <main class="lg:ml-[315px] px-6 xl:px-10 lg:py-8  space-y-6 pb-[100px] lg:pb-8">
      <section class="hidden lg:flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-[14px] max-h-[44px]">
          <button
            class="inline-flex items-center mr-[38px] gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition "
          >
            Nova cobrança
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 13.1423 4.85775 16.5 9 16.5ZM9.5625 6.75C9.5625 6.60082 9.50324 6.45774 9.39775 6.35225C9.29226 6.24676 9.14918 6.1875 9 6.1875C8.85082 6.1875 8.70774 6.24676 8.60225 6.35225C8.49676 6.45774 8.4375 6.60082 8.4375 6.75V8.4375H6.75C6.60082 8.4375 6.45774 8.49676 6.35225 8.60225C6.24676 8.70774 6.1875 8.85082 6.1875 9C6.1875 9.14918 6.24676 9.29226 6.35225 9.39775C6.45774 9.50324 6.60082 9.5625 6.75 9.5625H8.4375V11.25C8.4375 11.3992 8.49676 11.5423 8.60225 11.6477C8.70774 11.7532 8.85082 11.8125 9 11.8125C9.14918 11.8125 9.29226 11.7532 9.39775 11.6477C9.50324 11.5423 9.5625 11.3992 9.5625 11.25V9.5625H11.25C11.3992 9.5625 11.5423 9.50324 11.6477 9.39775C11.7532 9.29226 11.8125 9.14918 11.8125 9C11.8125 8.85082 11.7532 8.70774 11.6477 8.60225C11.5423 8.49676 11.3992 8.4375 11.25 8.4375H9.5625V6.75Z" fill="#D1DCFF"/>
            </svg>
          </button>

          <div class="inline-flex items-center gap-3 rounded-full border border-[#d9d9d9] bg-white px-5 py-2.5 text-sm font-semibold shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1.5 9C1.5 6.17175 1.5 4.75725 2.379 3.879C3.258 3.00075 4.67175 3 7.5 3H10.5C13.3282 3 14.7427 3 15.621 3.879C16.4992 4.758 16.5 6.17175 16.5 9V10.5C16.5 13.3282 16.5 14.7427 15.621 15.621C14.742 16.4992 13.3282 16.5 10.5 16.5H7.5C4.67175 16.5 3.25725 16.5 2.379 15.621C1.50075 14.742 1.5 13.3282 1.5 10.5V9Z" stroke="#0641FC" stroke-width="1.5"/>
              <path d="M5.25 3V1.875M12.75 3V1.875M1.875 6.75H16.125" stroke="#0641FC" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5C12.5511 13.5 12.3603 13.421 12.2197 13.2803C12.079 13.1397 12 12.9489 12 12.75C12 12.5511 12.079 12.3603 12.2197 12.2197C12.3603 12.079 12.5511 12 12.75 12C12.9489 12 13.1397 12.079 13.2803 12.2197C13.421 12.3603 13.5 12.5511 13.5 12.75ZM13.5 9.75C13.5 9.94891 13.421 10.1397 13.2803 10.2803C13.1397 10.421 12.9489 10.5 12.75 10.5C12.5511 10.5 12.3603 10.421 12.2197 10.2803C12.079 10.1397 12 9.94891 12 9.75C12 9.55109 12.079 9.36032 12.2197 9.21967C12.3603 9.07902 12.5511 9 12.75 9C12.9489 9 13.1397 9.07902 13.2803 9.21967C13.421 9.36032 13.5 9.55109 13.5 9.75ZM9.75 12.75C9.75 12.9489 9.67098 13.1397 9.53033 13.2803C9.38968 13.421 9.19891 13.5 9 13.5C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12C9.19891 12 9.38968 12.079 9.53033 12.2197C9.67098 12.3603 9.75 12.5511 9.75 12.75ZM9.75 9.75C9.75 9.94891 9.67098 10.1397 9.53033 10.2803C9.38968 10.421 9.19891 10.5 9 10.5C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75C8.25 9.55109 8.32902 9.36032 8.46967 9.21967C8.61032 9.07902 8.80109 9 9 9C9.19891 9 9.38968 9.07902 9.53033 9.21967C9.67098 9.36032 9.75 9.55109 9.75 9.75ZM6 12.75C6 12.9489 5.92098 13.1397 5.78033 13.2803C5.63968 13.421 5.44891 13.5 5.25 13.5C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12C5.44891 12 5.63968 12.079 5.78033 12.2197C5.92098 12.3603 6 12.5511 6 12.75ZM6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9C5.44891 9 5.63968 9.07902 5.78033 9.21967C5.92098 9.36032 6 9.55109 6 9.75Z" fill="#0641FC"/>
            </svg>
            <span>Período: Específico</span>
            <svg class="h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div class="inline-flex items-center rounded-full border border-[#d9d9d9] bg-white text-sm font-semibold shadow-sm">
            <div class="flex items-center gap-3 px-5 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1.5 9C1.5 6.17175 1.5 4.75725 2.379 3.879C3.258 3.00075 4.67175 3 7.5 3H10.5C13.3282 3 14.7427 3 15.621 3.879C16.4992 4.758 16.5 6.17175 16.5 9V10.5C16.5 13.3282 16.5 14.7427 15.621 15.621C14.742 16.4992 13.3282 16.5 10.5 16.5H7.5C4.67175 16.5 3.25725 16.5 2.379 15.621C1.50075 14.742 1.5 13.3282 1.5 10.5V9Z" stroke="#86898B" stroke-width="1.5"/>
                <path d="M5.25 3V1.875M12.75 3V1.875M1.875 6.75H16.125" stroke="#86898B" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5C12.5511 13.5 12.3603 13.421 12.2197 13.2803C12.079 13.1397 12 12.9489 12 12.75C12 12.5511 12.079 12.3603 12.2197 12.2197C12.3603 12.079 12.5511 12 12.75 12C12.9489 12 13.1397 12.079 13.2803 12.2197C13.421 12.3603 13.5 12.5511 13.5 12.75ZM13.5 9.75C13.5 9.94891 13.421 10.1397 13.2803 10.2803C13.1397 10.421 12.9489 10.5 12.75 10.5C12.5511 10.5 12.3603 10.421 12.2197 10.2803C12.079 10.1397 12 9.94891 12 9.75C12 9.55109 12.079 9.36032 12.2197 9.21967C12.3603 9.07902 12.5511 9 12.75 9C12.9489 9 13.1397 9.07902 13.2803 9.21967C13.421 9.36032 13.5 9.55109 13.5 9.75ZM9.75 12.75C9.75 12.9489 9.67098 13.1397 9.53033 13.2803C9.38968 13.421 9.19891 13.5 9 13.5C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12C9.19891 12 9.38968 12.079 9.53033 12.2197C9.67098 12.3603 9.75 12.5511 9.75 12.75ZM9.75 9.75C9.75 9.94891 9.67098 10.1397 9.53033 10.2803C9.38968 10.421 9.19891 10.5 9 10.5C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75C8.25 9.55109 8.32902 9.36032 8.46967 9.21967C8.61032 9.07902 8.80109 9 9 9C9.19891 9 9.38968 9.07902 9.53033 9.21967C9.67098 9.36032 9.75 9.55109 9.75 9.75ZM6 12.75C6 12.9489 5.92098 13.1397 5.78033 13.2803C5.63968 13.421 5.44891 13.5 5.25 13.5C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12C5.44891 12 5.63968 12.079 5.78033 12.2197C5.92098 12.3603 6 12.5511 6 12.75ZM6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9C5.44891 9 5.63968 9.07902 5.78033 9.21967C5.92098 9.36032 6 9.55109 6 9.75Z" fill="#86898B"/>
              </svg>
              <span>10-06-2020</span>
            </div>
            <span class="h-8 w-px bg-[#e4e7ee]" />
            <div class="flex items-center gap-3 px-5 py-2.5">
              <span>30-01-2025</span>
            </div>
            <svg class="mr-4 h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

        </div>

        <div  class="flex items-center gap-[14px]">
          <div class="inline-flex items-center gap-3 rounded-full border border-[#d9d9d9] bg-white px-5 py-2.5 text-sm font-semibold shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M16.5 8.25C16.4925 5.9145 16.419 4.67625 15.621 3.879C14.7427 3 13.3282 3 10.5 3H7.5C4.67175 3 3.25725 3 2.379 3.879C1.50075 4.758 1.5 6.17175 1.5 9C1.5 11.8282 1.5 13.2427 2.379 14.121C3.258 14.9992 4.67175 15 7.5 15H8.625" stroke="#0641FC" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M11.625 10.5V15M11.625 15L13.125 13.5M11.625 15L10.125 13.5M15 15V10.5M15 10.5L16.5 12M15 10.5L13.5 12" stroke="#0641FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 12H4.5M1.5 7.5H16.5" stroke="#0641FC" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>Tipo de cobrança</span>
            <svg class="h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <button class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-[#2a2e33] shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2.25 11.25C2.25 13.371 2.25 14.4323 2.90925 15.0908C3.56775 15.75 4.629 15.75 6.75 15.75H11.25C13.371 15.75 14.4323 15.75 15.0908 15.0908C15.75 14.4323 15.75 13.371 15.75 11.25M9 2.25V12M9 12L12 8.71875M9 12L6 8.71875" stroke="#2A2E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>



      
      </section>


      <section class="rounded-[24px] border border-[#eeeeee] bg-white p-6 lg:p-8 shadow-[0_20px_45px_rgba(17,21,27,0.05)]">

        <div class="hidden lg:flex flex-wrap items-start justify-between gap-6">
          <div>
            <p class="flex items-center gap-2 text-xl font-bold text-[#11151b]">
              Faturamento
              <!-- Ícone Desktop -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.5" d="M2 12C2 13.64 2.425 14.191 3.275 15.296C4.972 17.5 7.818 20 12 20C16.182 20 19.028 17.5 20.725 15.296C21.575 14.192 22 13.639 22 12C22 10.36 21.575 9.809 20.725 8.704C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12Z" fill="#86898B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12ZM9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z" fill="#86898B"/>
              </svg>
            </p>
            <div class="flex mt-[33px] gap-[12px]">
              <div class=" flex items-end gap-3">
                <span class="text-base font-semibold text-[#86898b]">R$</span>
                <p class="text-5xl font-bold leading-none tracking-tight text-[#0641fc]">
                  {{ formatNumberOnly(data.faturamento.total) }}
                </p>
              </div>
              <div class="flex flex-col items-start gap-1">
                <div class="flex items-center gap-2">
                  <svg class="h-[14px] w-[14px] text-[#34a853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 19V5" /> <path d="M5 12l7-7 7 7" /> 
                  </svg>
                  <span class="text-sm font-bold text-[#34a853]">
                    {{ data.faturamento.crescimento }}%
                  </span>
                </div>
                <span class="text-sm font-medium text-[#86898B]">Em crescimento</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Header do Card no MOBILE -->
        <div class="lg:hidden flex justify-between items-start mb-6">
          <div>
             <p class="text-sm font-bold text-[#11151b]">Estatísticas do período</p>
             <h2 class="text-2xl font-bold text-[#11151b] mt-1">R$ 760.102,06</h2>
             <p class="text-xs font-bold text-[#2FCD66] mt-1 flex items-center gap-1">
                ↑ 123,9%
             </p>
          </div>
          <button class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.8334 2.5H4.16669C2.98835 2.5 2.39919 2.5 2.03335 2.84333C1.66752 3.18667 1.66669 3.74 1.66669 4.84583V5.42083C1.66669 6.285 1.66669 6.7175 1.88335 7.07583C2.10002 7.43417 2.49419 7.6575 3.28502 8.1025L5.71252 9.46917C6.24252 9.7675 6.50835 9.91667 6.69835 10.0817C7.09335 10.4242 7.33669 10.8275 7.44669 11.3233C7.50002 11.56 7.50002 11.8383 7.50002 12.3942V14.6192C7.50002 15.3767 7.50002 15.7558 7.71002 16.0508C7.92002 16.3467 8.29335 16.4925 9.03835 16.7842C10.6042 17.3958 11.3867 17.7017 11.9434 17.3533C12.5 17.005 12.5 16.21 12.5 14.6183V12.3933C12.5 11.8383 12.5 11.56 12.5534 11.3225C12.658 10.8368 12.9216 10.3999 13.3025 10.0808C13.4917 9.91667 13.7575 9.7675 14.2875 9.46833L16.715 8.10167C17.505 7.6575 17.9009 7.435 18.1167 7.07667C18.3334 6.71833 18.3334 6.285 18.3334 5.42V4.845C18.3334 3.74 18.3334 3.18667 17.9667 2.84333C17.6017 2.5 17.0125 2.5 15.8334 2.5Z" stroke="black" stroke-width="1.5"/>
          </svg>
          </button>
        </div>

        <!-- GRÁFICO -->
        <div class="mt-[20px] lg:mt-[51px] h-48 lg:h-64 pl-0 lg:pl-10">
          <BarChart :data="data.graficoDiario" :mobile="false" />
        </div>

        <!-- DATA RANGE MOBILE -->
        <div class="lg:hidden text-center mt-4  !h-[29px]">
           <span class="bg-gray-100 text-gray-500 !h-[29px] text-[10px] px-3 py-1.5 rounded-full font-medium">De 15 de Dez. de 2024 à 07 de Fev. de 2025</span>
        </div>

        <!-- GRID HIGHLIGHTS: DESKTOP (Grid Normal) / MOBILE (Scroll Horizontal) -->
        <div class="mt-8 hidden lg:grid lg:grid-cols-5 gap-4">
          
          <article v-for="highlight in faturamentoHighlights" :key="highlight.id" 
                   class="lg:bg-transparent bg-white  border border-gray-100 lg:shadow-none shadow-sm lg:p-4 p-5 rounded-[20px]">
            
            <div class="flex items-center justify-between text-xs font-semibold text-[#86898B]">
              <span>{{ highlight.label }}</span>
              <span v-if="highlight.chip" class="rounded-full border border-[#d9d9d9] px-3 py-0.5 text-[10px] text-[#2a2e33]">
                {{ highlight.chip }}
              </span>
            </div>

            <div class="mt-[15px] flex items-center gap-2">
              <div class="relative h-3 w-5 flex-shrink-0">
                <span class="absolute left-0 top-0 z-10 h-3 w-3 rounded-full" :style="{ backgroundColor: highlight.dotColor }"></span>
                <span class="absolute left-2 top-0 h-3 w-3 rounded-full opacity-40" :style="{ backgroundColor: highlight.dotColor }"></span>
              </div>
              <p class="text-xl font-bold text-[#11151b]">
                <span v-if="highlight.format === 'currency'">{{ formatCurrency(highlight.value) }}</span>
                <span v-else>{{ highlight.value }}</span>
              </p>
            </div>
          </article>

        </div>
      </section>


      <div class="mt-8 lg:hidden flex overflow-x-auto snap-x gap-4 -mx-6 px-6 pb-2 hide-scroll">
  
        <article v-for="highlight in faturamentoHighlights" :key="highlight.id" 
                class="min-w-[310px] min-h-[121px] snap-center bg-white border border-gray-100 shadow-sm p-5 rounded-[20px]">
          
          <div class="flex items-center justify-between text-xs font-semibold text-[#86898B]">
            <span>{{ highlight.label }}</span>
            <span v-if="highlight.chip" class="rounded-full border border-[#d9d9d9] px-3 py-0.5 text-[10px] text-[#2a2e33]">
              {{ highlight.chip }}
            </span>
          </div>

          <div class="mt-[15px] flex items-center gap-2">
            <div class="relative h-3 w-5 flex-shrink-0">
              <span class="absolute left-0 top-0 z-10 h-3 w-3 rounded-full" :style="{ backgroundColor: highlight.dotColor }"></span>
              <span class="absolute left-2 top-0 h-3 w-3 rounded-full opacity-40" :style="{ backgroundColor: highlight.dotColor }"></span>
            </div>
            <p class="text-xl font-bold text-[#11151b]">
              <span v-if="highlight.format === 'currency'">{{ formatCurrency(highlight.value) }}</span>
              <span v-else>{{ highlight.value }}</span>
            </p>
          </div>
        </article>

      </div>

      <!-- TRANSFERÊNCIA PENDENTE -->
      <section
        v-if="data.transferenciaPendente.ativo"
        class="flex flex-col rounded-[24px] lg:rounded-full border border-[#eeeeee] bg-white shadow-sm overflow-hidden lg:flex-row lg:items-center lg:justify-between lg:p-6"
      >
        <div class="flex items-start gap-4 p-6 lg:p-0">
          
          <div class="relative h-12 w-12 flex-shrink-0">
            <div class="h-12 w-12 rounded-full bg-[#E8E8E8] flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
               </svg>
            </div>
            
            <div class="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#FF9F43] border-2 border-white flex items-center justify-center">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#FF9D3A"/>
                <circle cx="9.5" cy="9.5" r="8.75" stroke="#FFE8D1" stroke-opacity="0.45" stroke-width="1.5"/>
                <path d="M9.21 10.78L9.13 5.55H10.28L10.21 10.78H9.21ZM9.13 13V11.7H10.28V13H9.13Z" fill="black"/>
              </svg>
            </div>
          </div>

          <div>
            <p class="text-base text-sm lg:text-lg lg:font-bold text-[#11151b] leading-tight mb-1">Solicitação de transferência pendente</p>
            <p class="text-sm text-[#86898B]  leading-relaxed">
              A transação no valor de {{ formatCurrency(data.transferenciaPendente.valor) }} está aguardando a sua aprovação.
            </p>
          </div>
        </div>

        <button
          class="flex w-full lg:w-auto items-center justify-between gap-2 bg-[#0641FC] px-6 py-4 text-sm lg:text-base font-semibold text-white transition hover:bg-[#0537d6] lg:rounded-full lg:py-3 lg:px-6 lg:justify-center"
        >
          <span>Autorizar transferência</span>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path d="M0.75 0.75L3.75 3.75L0.75 6.75" stroke="#D1DCFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg class="hidden lg:block w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3075 7.39499C15.2638 7.39296 15.22 7.39221 15.1762 7.39274H13.35C11.856 7.39274 10.5765 8.57849 10.5765 10.125C10.5765 11.6715 11.856 12.8572 13.3507 12.8572H15.1755C15.2215 12.8577 15.2652 12.8567 15.3067 12.8542C15.615 12.8342 15.9055 12.703 16.1243 12.4849C16.3431 12.2668 16.4753 11.9767 16.4962 11.6685C16.4992 11.6242 16.4992 11.577 16.4992 11.5335V8.71649C16.4992 8.67299 16.4992 8.62574 16.4962 8.58149C16.4753 8.27341 16.3432 7.98339 16.1246 7.76532C15.906 7.54724 15.6156 7.41592 15.3075 7.39574M13.1902 10.854C13.575 10.854 13.8877 10.5285 13.8877 10.1257C13.8877 9.72299 13.575 9.39749 13.1902 9.39749C12.8055 9.39749 12.4935 9.72299 12.4935 10.1257C12.4935 10.5285 12.8047 10.854 13.1902 10.854Z" fill="#D1DCFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1755 13.95C15.2006 13.9491 15.2256 13.9542 15.2484 13.9647C15.2713 13.9752 15.2913 13.991 15.3069 14.0107C15.3225 14.0304 15.3333 14.0535 15.3383 14.0781C15.3434 14.1028 15.3426 14.1282 15.336 14.1525C15.1905 14.6715 14.9602 15.114 14.5905 15.486C14.0498 16.0313 13.3635 16.2735 12.516 16.3883C11.6925 16.5 10.641 16.5 9.312 16.5H7.78425C6.456 16.5 5.40375 16.5 4.58025 16.3883C3.73275 16.2735 3.0465 16.0313 2.50575 15.486C1.965 14.9423 1.725 14.25 1.611 13.3965C1.5 12.5655 1.5 11.505 1.5 10.1663V10.0837C1.5 8.745 1.5 7.68375 1.611 6.85425C1.725 6 1.965 5.31 2.505 4.76325C3.04575 4.21875 3.732 3.97575 4.5795 3.86175C5.40375 3.75 6.456 3.75 7.78425 3.75H9.312C10.6403 3.75 11.6925 3.75 12.516 3.86175C13.3635 3.9765 14.0498 4.21875 14.5905 4.76325C14.9602 5.136 15.1905 5.5785 15.336 6.09825C15.3425 6.12246 15.3431 6.14785 15.338 6.17238C15.3329 6.19691 15.3221 6.2199 15.3065 6.23951C15.2909 6.25912 15.2709 6.27481 15.2482 6.28531C15.2254 6.29582 15.2005 6.30085 15.1755 6.3H13.3507C11.3003 6.3 9.4935 7.93275 9.4935 10.125C9.4935 12.3173 11.301 13.95 13.3515 13.95H15.1755ZM4.2105 6.6645C4.13909 6.66479 4.06844 6.67915 4.00259 6.70675C3.93673 6.73435 3.87695 6.77465 3.82667 6.82535C3.77639 6.87605 3.73658 6.93616 3.70953 7.00224C3.68248 7.06833 3.6687 7.13909 3.669 7.2105C3.669 7.51275 3.91125 7.75725 4.2105 7.75725H7.1025C7.4025 7.75725 7.64475 7.51275 7.64475 7.2105C7.64515 7.06622 7.58827 6.92768 7.4866 6.8253C7.38493 6.72293 7.24678 6.6651 7.1025 6.6645H4.2105Z" fill="#D1DCFF"/>
            <path d="M5.83276 3.01826L7.30126 1.93601C7.68452 1.65282 8.14849 1.5 8.62501 1.5C9.10154 1.5 9.56551 1.65282 9.94876 1.93601L11.4255 3.02426C10.8075 3.00026 10.1175 3.00026 9.36226 3.00026H7.73476C7.04326 3.00026 6.40801 3.00026 5.83276 3.01826Z" fill="#D1DCFF"/>
          </svg>
        </button>
      </section>

      <!-- GRID STATUS (Reembolsos, etc) -->
      <section class="
        bg-white rounded-[24px] border border-[#eeeeee] p-6 shadow-sm grid grid-cols-2 gap-x-4 gap-y-6
      
        lg:bg-transparent lg:border-0 lg:p-0 lg:shadow-none lg:gap-4 lg:grid-cols-4
      ">
        <article
          v-for="(status, index) in statusCards"
          :key="status.tipo"
          class="
            flex flex-col justify-between
            /* Mobile: Remove estilo de card individual (ficam transparentes dentro do pai) */
            bg-transparent p-0 border-0 shadow-none relative
            
            /* Desktop: Restaura o estilo de card individual (Branco, Borda, Sombra) */
            lg:bg-white lg:rounded-[20px] lg:border lg:border-[#eeeeee] lg:p-5 lg:shadow-[0_18px_35px_rgba(17,21,27,0.07)]
          "
          :class="{ 
            /* Mobile: Adiciona linha divisória apenas nos 2 primeiros itens */
            'border-b border-gray-100 pb-6': index < 2,
            /* Desktop: Remove essa linha divisória e padding extra */
            'lg:border-b-0 lg:pb-0': true 
          }"
        >
          
          <div class="flex items-start justify-between w-full">
            
            <div class="flex items-center gap-1">
              <p class="text-[13px] lg:text-sm font-semibold lg:text-[#2a2e33] text-[#86898B]">
                {{ status.tipo }}
              </p>
              
              <div v-if="status.tipo === 'Chargebacks'" class="flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#FF9D3A"/>
                  <circle cx="9.5" cy="9.5" r="8.75" stroke="#FFE8D1" stroke-opacity="0.45" stroke-width="1.5"/>
                  <path d="M9.5 5.5V10.5M9.5 13.5H9.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <svg class="hidden lg:block" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white"/>
              <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#D9D9D9"/>
              <path d="M16.868 30L26.564 18.08H28.58L18.884 30H16.868ZM18.692 24.128C18.1053 24.128 17.5773 23.9893 17.108 23.712C16.6387 23.424 16.26 23.0453 15.972 22.576C15.6947 22.1067 15.556 21.584 15.556 21.008C15.556 20.432 15.6947 19.9093 15.972 19.44C16.26 18.96 16.6387 18.5813 17.108 18.304C17.5773 18.0267 18.1053 17.888 18.692 17.888C19.2787 17.888 19.8067 18.0267 20.276 18.304C20.7453 18.5813 21.1187 18.96 21.396 19.44C21.6733 19.9093 21.812 20.432 21.812 21.008C21.812 21.584 21.6733 22.1067 21.396 22.576C21.1187 23.0453 20.7453 23.424 20.276 23.712C19.8067 23.9893 19.2787 24.128 18.692 24.128ZM18.692 22.672C19.0227 22.672 19.3053 22.592 19.54 22.432C19.7853 22.272 19.972 22.064 20.1 21.808C20.228 21.552 20.292 21.2853 20.292 21.008C20.292 20.72 20.228 20.4533 20.1 20.208C19.972 19.952 19.7853 19.744 19.54 19.584C19.3053 19.424 19.0227 19.344 18.692 19.344C18.372 19.344 18.0893 19.424 17.844 19.584C17.5987 19.744 17.4067 19.952 17.268 20.208C17.14 20.4533 17.076 20.72 17.076 21.008C17.076 21.2853 17.14 21.552 17.268 21.808C17.4067 22.064 17.5987 22.272 17.844 22.432C18.0893 22.592 18.372 22.672 18.692 22.672ZM26.676 30.192C26.0893 30.192 25.556 30.0533 25.076 29.776C24.6067 29.488 24.2333 29.1093 23.956 28.64C23.6787 28.1707 23.54 27.648 23.54 27.072C23.54 26.496 23.6787 25.9733 23.956 25.504C24.2333 25.024 24.6067 24.6453 25.076 24.368C25.556 24.0907 26.0893 23.952 26.676 23.952C27.2627 23.952 27.7907 24.0907 28.26 24.368C28.7293 24.6453 29.1027 25.024 29.38 25.504C29.6573 25.9733 29.796 26.496 29.796 27.072C29.796 27.648 29.6573 28.1707 29.38 28.64C29.1027 29.1093 28.7293 29.488 28.26 29.776C27.7907 30.0533 27.2627 30.192 26.676 30.192ZM26.676 28.736C27.0067 28.736 27.2893 28.656 27.524 28.496C27.7587 28.336 27.94 28.128 28.068 27.872C28.2067 27.616 28.276 27.3493 28.276 27.072C28.276 26.784 28.2067 26.5173 28.068 26.272C27.94 26.016 27.7587 25.808 27.524 25.648C27.2893 25.488 27.0067 25.408 26.676 25.408C26.356 25.408 26.0733 25.488 25.828 25.648C25.5827 25.808 25.3907 26.016 25.252 26.272C25.124 26.5173 25.06 26.784 25.06 27.072C25.06 27.3493 25.124 27.616 25.252 27.872C25.3907 28.128 25.5827 28.336 25.828 28.496C26.0733 28.656 26.356 28.736 26.676 28.736Z" fill="#2A2E33"/>
            </svg>


          </div>

          <p class="mt-[7px] lg:mt-4 text-xl lg:text-2xl font-bold text-[#11151b]">
            {{ status.valorFormatado }}
          </p>
          
          <div class="hidden lg:flex mt-4 mb-4 items-center border-t border-[#EEEEEE] justify-between text-xs font-medium pt-3">
             <span class="text-[#5a5c60]">{{ status.quantidade }} cobranças</span>
             <span class="text-[#11151b] font-bold text-sm">{{ status.percentualFormatado }}</span>
          </div>

          <div class="flex lg:hidden items-center justify-between mt-2">
             <span class="text-[14px] font-bold" :class="status.corTextoMobile">
               {{ status.percentualFormatado }}
             </span>
             
             <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 18C2 18 8.5 18 11.5 15C14.5 12 16.5 12 19.5 15C22.5 18 26.5 21 30.5 16C34.5 11 38.5 8 42.5 11C46.5 14 50 11 50 11" stroke="#8E2DE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
          </div>

        </article>
      </section>

      <!-- RODAPÉ: GRÁFICOS PIZZA E BANDEIRAS -->
      <section class="grid grid-cols-1 lg:gap-4 gap-3 xl:grid-cols-2 ">
        
        <!-- Conversão -->
        <article class="rounded-[24px] border border-[#eeeeee] bg-white p-6 shadow-sm h-auto lg:max-h-[262px]">
          <header class="mb-6 flex items-center justify-between">
            <h3 class="text-sm font-semibold text-[#11151b]">Conversão por modalidade</h3>
          </header>

          <div class="border border-[#F1F1F1] rounded-[20px] py-8 px-2 lg:border-0 lg:p-0 lg:rounded-none">
            
            <div class="grid grid-cols-2 gap-y-8 gap-x-2 lg:gap-6 lg:grid-cols-4">
              <div
                v-for="modalidade in data.conversaoModalidade"
                :key="modalidade.tipo"
                class="flex flex-col items-center text-center"
              >
                <DonutChart :percentual="modalidade.percentual" :cor="modalidade.cor" />
                <p class="mt-3 text-sm font-medium text-[#2a2e33]">{{ modalidade.tipo }}</p>
              </div>
            </div>

          </div>
        </article>

        <!-- Bandeiras -->
        <article class="rounded-[24px] border border-[#eeeeee]  bg-white overflow-x-auto p-6 shadow-sm">
          <header class="mb-6 flex items-center gap-2">
            <h3 class="text-sm font-semibold text-[#11151b]">Bandeiras mais utilizadas</h3>
            <svg class="h-4 w-4 text-[#86898b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 8v4" stroke-linecap="round" />
              <path d="M12 16h.01" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </header>
          <FlagChart :data="bandeiras" />
        </article>
      </section>
    </main>

    <!-- BOTÃO FLUTUANTE (DESKTOP) -->
    <button class="fixed bottom-6 right-6 hidden h-14 w-14 items-center justify-center rounded-full  bg-[#0641fc] text-xl font-bold text-white shadow-2xl shadow-[#0641fc]/40 lg:flex">
      <svg width="12" height="20" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.592 12.928L3.392 13.6C3.072 13.3867 2.77333 13.0667 2.496 12.64C2.21867 12.2133 2.08 11.712 2.08 11.136C2.08 10.56 2.22933 10.1227 2.528 9.824C2.848 9.52533 3.31733 9.30133 3.936 9.152L6.368 8.544C7.136 8.33067 7.70133 8.04267 8.064 7.68C8.448 7.31733 8.64 6.816 8.64 6.176C8.64 5.62133 8.40533 5.12 7.936 4.672C7.46667 4.224 6.67733 4 5.568 4C4.71467 4 3.88267 4.11733 3.072 4.352C2.28267 4.58667 1.64267 4.87467 1.152 5.216C0.853333 4.96 0.586667 4.65067 0.352 4.288C0.117333 3.92533 0 3.50933 0 3.04C0 2.016 0.576 1.25867 1.728 0.768C2.90133 0.256 4.384 0 6.176 0C7.79733 0 9.16267 0.266666 10.272 0.799999C11.3813 1.312 12.224 2.03733 12.8 2.976C13.3973 3.89333 13.696 4.96 13.696 6.176C13.696 8.01067 13.0987 9.472 11.904 10.56C10.7307 11.648 8.96 12.4373 6.592 12.928ZM2.496 18.048C2.496 17.2587 2.74133 16.608 3.232 16.096C3.744 15.584 4.42667 15.328 5.28 15.328C6.112 15.328 6.77333 15.584 7.264 16.096C7.776 16.608 8.032 17.2587 8.032 18.048C8.032 18.8373 7.776 19.488 7.264 20C6.77333 20.512 6.112 20.768 5.28 20.768C4.42667 20.768 3.744 20.512 3.232 20C2.74133 19.488 2.496 18.8373 2.496 18.048Z" fill="white"/>
      </svg>
    </button>

    <!-- ==================================================================
         BOTTOM NAVIGATION (MOBILE FIXED)
         ================================================================== -->
         <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
      <div class="relative flex items-center justify-between h-[70px] px-2">
        
        <div class="flex w-[40%] justify-evenly items-center">
          
          <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
            <svg class="w-6 h-6 text-[#2a2e33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="text-[10px] font-medium text-[#86898B]">Simule</span>
          </button>

          <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
            <svg class="w-6 h-6 text-[#2a2e33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-[10px] font-medium text-[#86898B]">Cobranças</span>
          </button>

        </div>

        <div class="w-[20%]"></div>

        <div class="absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center">
          <button 
            class="w-14 h-14 bg-[#0641FC] rounded-full flex items-center justify-center text-white shadow-lg border-[6px] border-[#edeff4] z-10 hover:bg-blue-700 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          
          <div class="mt-3 w-1.5 h-1.5 bg-[#0641FC] rounded-full"></div>
        </div>

        <div class="flex w-[40%] justify-evenly items-center">
          
          <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
            <svg class="w-6 h-6 text-[#2a2e33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span class="text-[10px] font-medium text-[#86898B]">Carteira</span>
          </button>

          <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
            <svg class="w-6 h-6 text-[#2a2e33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span class="text-[10px] font-medium text-[#86898B]">Menu</span>
          </button>

        </div>

      </div>
    </nav>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DashboardService from '@/services/DashboardService'
import BarChart from '@/components/BarChart.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DonutChart from '@/components/DonutChart.vue'
import FlagChart from '@/components/FlagChart.vue'

const data = ref({
  faturamento: {
    total: 0,
    crescimento: 0,
    recebido: 0,
    previsto: 0,
    vendasPendentes: 0,
    ticketMedio: 0,
    numeroCobrancas: 0
  },
  transferenciaPendente: {
    valor: 0,
    ativo: false
  },
  statusTransacoes: [],
  conversaoModalidade: [],
  graficoDiario: []
})

const bandeiras = ref([
  { 
    nome: 'VISA', 
    height: 30, 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="24" viewBox="0 0 49 24" fill="none"><path d="M21.1266 17.6316H18.3282L20.0785 7.07129H22.8767L21.1266 17.6316Z" fill="#1633CA"/><path d="M31.2707 7.33043C30.7187 7.11678 29.8433 6.88086 28.7608 6.88086C25.9973 6.88086 24.0514 8.31879 24.0394 10.3746C24.0165 11.8913 25.4327 12.7338 26.492 13.2395C27.5746 13.7563 27.9426 14.0936 27.9426 14.5543C27.9316 15.2617 27.0677 15.5878 26.2621 15.5878C25.1449 15.5878 24.5462 15.4197 23.6365 15.0261L23.268 14.8573L22.8765 17.2279C23.5328 17.5197 24.7419 17.7786 25.9973 17.7899C28.9336 17.7899 30.8451 16.3743 30.8678 14.1835C30.8789 12.9813 30.1312 12.0602 28.5189 11.3075C27.5402 10.8243 26.9408 10.4985 26.9408 10.0041C26.9522 9.55465 27.4477 9.09436 28.5525 9.09436C29.4623 9.07181 30.1306 9.28519 30.637 9.49865L30.8901 9.61079L31.2707 7.33043Z" fill="#1633CA"/><path d="M34.9914 13.8905C35.2219 13.2838 36.1087 10.9358 36.1087 10.9358C36.097 10.9583 36.3386 10.3179 36.4768 9.92473L36.6724 10.8347C36.6724 10.8347 37.2024 13.3625 37.3174 13.8905C36.8801 13.8905 35.5442 13.8905 34.9914 13.8905ZM38.4456 7.07129H36.2811C35.6136 7.07129 35.1065 7.26212 34.8186 7.94749L30.662 17.6314H33.5982C33.5982 17.6314 34.0816 16.3281 34.1855 16.0473C34.5076 16.0473 37.364 16.0473 37.7783 16.0473C37.8586 16.4181 38.1122 17.6314 38.1122 17.6314H40.7032L38.4456 7.07129Z" fill="#1633CA"/><path d="M15.9912 7.07129L13.2508 14.2724L12.9513 12.8119C12.4446 11.1268 10.8557 9.29578 9.08243 8.38546L11.5926 17.6204H14.5517L18.9503 7.07129H15.9912Z" fill="#1633CA"/><path d="M10.706 7.07324H6.20377L6.15771 7.28665C9.66971 8.16294 11.9957 10.2754 12.9513 12.8144L11.9726 7.9609C11.8115 7.2865 11.3163 7.0955 10.706 7.07324Z" fill="#1633CA"/></svg>`
  },
  { 
    nome: 'Mastercard', 
    height: 30,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M21.1824 6.10352H14.6206V17.8959H21.1824V6.10352Z" fill="#FF5D11"/><path d="M15.0372 12.0021C15.036 10.8663 15.2933 9.745 15.7895 8.72335C16.2857 7.70163 17.008 6.80619 17.9015 6.10489C16.7951 5.23545 15.4666 4.6948 14.0675 4.54473C12.6685 4.39466 11.2554 4.64121 9.98994 5.25622C8.72439 5.87124 7.65737 6.82989 6.9109 8.02263C6.16442 9.21535 5.76855 10.594 5.76855 12.0011C5.76855 13.4082 6.16442 14.7868 6.9109 15.9795C7.65737 17.1723 8.72439 18.1309 9.98994 18.746C11.2554 19.361 12.6685 19.6075 14.0675 19.4574C15.4666 19.3074 16.7951 18.7667 17.9015 17.8973C17.0082 17.1962 16.2862 16.3011 15.7899 15.2798C15.2937 14.2584 15.0363 13.1376 15.0372 12.0021Z" fill="#EC0021"/><path d="M30.0359 12.001C30.0358 13.4082 29.6399 14.787 28.8933 15.9797C28.1466 17.1725 27.0795 18.1312 25.8138 18.7461C24.5481 19.361 23.1349 19.6074 21.7359 19.4571C20.3367 19.3068 19.0081 18.7659 17.9019 17.8962C18.7947 17.1945 19.5166 16.2991 20.013 15.2778C20.5093 14.2564 20.7672 13.1356 20.7672 12C20.7672 10.8644 20.5093 9.74362 20.013 8.7222C19.5166 7.70085 18.7947 6.80551 17.9019 6.10381C19.0081 5.2341 20.3367 4.69318 21.7359 4.5429C23.1349 4.39261 24.5481 4.639 25.8138 5.25393C27.0795 5.86885 28.1466 6.82749 28.8933 8.02027C29.6399 9.213 30.0358 10.5918 30.0359 11.9989V12.001Z" fill="#F89E26"/><path d="M29.3208 16.6471V16.4054H29.4188V16.3555H29.1709V16.4054H29.2771V16.6471H29.3208ZM29.802 16.6471V16.3555H29.727L29.6396 16.5637L29.552 16.3555H29.4854V16.6471H29.5396V16.4284L29.6208 16.6179H29.6771L29.7583 16.4284V16.6492L29.802 16.6471Z" fill="#F89E26"/></svg>`
  },
  { 
    nome: 'ELO', 
    height: 25,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="24" viewBox="0 0 49 24" fill="none"><mask id="mask0_2005_7715" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="5" width="40" height="14"><path d="M43.9846 5.80859H4.01562V18.1894H43.9846V5.80859Z" fill="white"/></mask><g mask="url(#mask0_2005_7715)"><path d="M4.01562 10.8794H6.96655C7.49899 8.0678 9.94233 5.80859 13.0574 5.80859C16.1725 5.80859 19.0836 8.33151 19.0836 12.1383C19.0836 12.4909 19.0438 12.8698 19.004 13.1585H9.47455C9.9224 14.8902 11.3456 15.9053 13.0574 15.9053C14.7692 15.9053 15.6251 15.333 16.4959 14.3378L18.2476 15.9451C17.0881 17.2688 15.3564 18.1845 13.0574 18.1845C10.7584 18.1845 7.49899 15.965 6.97149 13.1535H4.01562V10.8743V10.8794ZM16.5557 10.8794C16.4313 10.1677 16.1079 9.51587 15.6401 9.04809C15.028 8.43602 14.1323 8.05289 13.0524 8.05289C11.9726 8.05289 11.0968 8.42111 10.4449 9.07296C9.79302 9.72489 9.6288 10.1329 9.44968 10.8843H16.5557V10.8794ZM20.8551 5.88822H23.4179V15.6615H28.0607V18.1048H23.4577C21.7657 18.1048 20.8502 17.1892 20.8502 15.4973V5.88822H20.8551ZM28.5484 11.999C28.5484 8.67987 31.2554 5.80859 34.8383 5.80859C38.4212 5.80859 40.4962 8.04787 41.0287 10.8794H43.9796V13.1585H41.0287C40.4813 15.9701 37.9932 18.1894 34.8383 18.1894C31.2355 18.1894 28.5484 15.3381 28.5484 11.999ZM34.8433 15.7859C36.9831 15.7859 38.5705 14.1587 38.5705 12.0189C38.5705 9.87915 36.9432 8.21209 34.8433 8.21209C32.7035 8.21209 31.1161 9.83929 31.1161 11.999C31.1161 14.1587 32.7433 15.7859 34.8433 15.7859Z" fill="#003933"/></g></svg>`
  },
  { 
    nome: 'Amex', 
    height: 15,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.11938 2.48242H21.1539V21.5169H2.11938V2.48242Z" fill="#016FD0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.01428 18.5043V11.6836L21.153 11.6942V13.5786L19.7498 15.0781L21.153 16.5914V18.5149H18.9133L17.7226 17.2016L16.5403 18.5202L9.01428 18.5043Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.82391 17.7558V12.4336H14.3372V13.6592H11.2854V14.4914H14.2642V15.6969H11.2854V16.5143H14.3372V17.7558H9.82391Z" fill="#016FD0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.314 17.7558L16.8117 15.091L14.314 12.4336H16.2471L17.773 14.1203L19.3031 12.4336H21.1527V12.4759L18.7088 15.091L21.1527 17.6796V17.7558H19.2841L17.7317 16.0522L16.1942 17.7558H14.314Z" fill="#016FD0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.58055 5.63086H12.5067L13.5345 7.96476V5.63086H17.1468L17.7697 7.37996L18.3946 5.63086H21.1536V12.4515H6.57532L9.58055 5.63086Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1355 6.37207L7.77423 11.69H9.3943L9.83954 10.6251H12.2536L12.6989 11.69H14.3592L12.0062 6.37207H10.1355ZM10.3386 9.43126L11.0472 7.73824L11.7545 9.43126H10.3386Z" fill="#016FD0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3353 11.689V6.37109L16.6121 6.37956L17.7837 9.64823L18.9628 6.37109H21.1538V11.689L19.7443 11.7018V8.04823L18.4129 11.689H17.126L15.7671 8.03659V11.689H14.3353Z" fill="#016FD0"/></svg>`
  },
  { 
    nome: 'G Pay', 
    height:  5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 44 24" fill="none"><mask id="mask0_2005_7732" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="4" width="33" height="16"><path d="M37.7381 4.375H5.72009V19.6236H37.7381V4.375Z" fill="white"/></mask><g mask="url(#mask0_2005_7732)"><path d="M20.8496 12.2595V15.9816H19.6489V6.77637H22.7706C23.5311 6.77637 24.2515 7.05653 24.8118 7.57685C25.3721 8.05706 25.6523 8.77748 25.6523 9.53793C25.6523 10.2984 25.3721 10.9787 24.8118 11.499C24.2515 12.0193 23.5711 12.2995 22.7706 12.2995L20.8496 12.2595ZM20.8496 7.89696V11.0988H22.8507C23.2909 11.0988 23.7312 10.9387 24.0114 10.6186C24.6517 10.0182 24.6517 9.01762 24.0514 8.41727L24.0114 8.37724C23.6912 8.05706 23.2909 7.85694 22.8507 7.89696H20.8496Z" fill="black"/><path d="M28.4132 9.49805C29.2937 9.49805 29.9741 9.73819 30.4944 10.2185C31.0147 10.6988 31.2548 11.3391 31.2548 12.1396V15.9817H30.1342V15.1013H30.0942C29.6139 15.8216 28.9335 16.1818 28.1331 16.1818C27.4527 16.1818 26.8523 15.9817 26.372 15.5815C25.9318 15.1813 25.6516 14.621 25.6516 14.0206C25.6516 13.3803 25.8918 12.86 26.372 12.4597C26.8523 12.0596 27.5327 11.8995 28.3332 11.8995C29.0535 11.8995 29.6139 12.0195 30.0541 12.2996V12.0195C30.0541 11.6193 29.894 11.2191 29.5738 10.9789C29.2537 10.6988 28.8534 10.5387 28.4132 10.5387C27.7328 10.5387 27.2125 10.8188 26.8523 11.3792L25.8117 10.7388C26.4521 9.89828 27.2926 9.49805 28.4132 9.49805ZM26.8923 14.0607C26.8923 14.3808 27.0524 14.661 27.2926 14.8211C27.5727 15.0212 27.8929 15.1413 28.2131 15.1413C28.6933 15.1413 29.1736 14.9412 29.5338 14.581C29.9341 14.2208 30.1342 13.7805 30.1342 13.3002C29.774 13.02 29.2537 12.86 28.5733 12.86C28.093 12.86 27.6928 12.98 27.3726 13.2202C27.0524 13.4203 26.8923 13.7004 26.8923 14.0607Z" fill="black"/><path d="M37.738 9.69727L33.7758 18.7824H32.5751L34.0559 15.6206L31.4545 9.73729H32.7352L34.6163 14.2599H34.6563L36.4973 9.73729H37.738V9.69727Z" fill="black"/><path d="M16.0874 11.4586C16.0874 11.0984 16.0474 10.7381 16.0074 10.3779H11.0045V12.4191H13.8461C13.7261 13.0594 13.3659 13.6598 12.8056 14.02V15.3407H14.5265C15.5271 14.4202 16.0874 13.0594 16.0874 11.4586Z" fill="#4285F4"/><path d="M11.0024 16.6213C12.4433 16.6213 13.6439 16.141 14.5244 15.3406L12.8034 14.0199C12.3232 14.34 11.7229 14.5402 11.0024 14.5402C9.64165 14.5402 8.44101 13.6196 8.04078 12.3389H6.27979V13.6997C7.20028 15.5007 9.00134 16.6213 11.0024 16.6213Z" fill="#34A853"/><path d="M8.04037 12.3394C7.80023 11.6991 7.80023 10.9786 8.04037 10.2983V8.9375H6.27937C5.51894 10.4184 5.51894 12.1793 6.27937 13.7002L8.04037 12.3394Z" fill="#FABB05"/><path d="M11.0038 8.13702C11.7642 8.13702 12.4847 8.41718 13.0449 8.93749L14.5658 7.41666C13.6053 6.53613 12.3246 6.01584 11.0438 6.05586C9.04271 6.05586 7.20163 7.17652 6.32117 8.97751L8.08215 10.3383C8.44236 9.05756 9.64306 8.13702 11.0038 8.13702Z" fill="#E94235"/></g></svg>`
  },
  { 
    nome: 'Samsung', 
    height: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 46 24" fill="none"><mask id="mask0_2005_7744" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="4" width="35" height="16"><path d="M39.0331 4.5H5.625V19.5H39.0331V4.5Z" fill="white"/></mask><g mask="url(#mask0_2005_7744)"><mask id="mask1_2005_7744" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="1" width="40" height="20"><path d="M2.96924 1.84082H41.6948V20.2702H2.96924V1.84082Z" fill="white"/></mask><g mask="url(#mask1_2005_7744)"><path d="M7.3149 15.2698H6.58765V13.3887H7.3149C7.88122 13.3887 8.26589 13.8084 8.26589 14.3257C8.26589 14.8503 7.88122 15.2698 7.3149 15.2698ZM7.38479 12.5078H5.63666V17.6122H6.58765V16.1508H7.37774C8.44057 16.1508 9.22379 15.3397 9.22379 14.3257C9.22379 13.3189 8.44057 12.5078 7.38479 12.5078Z" fill="black"/><path d="M11.645 16.8288C10.9458 16.8288 10.4076 16.2695 10.4076 15.5563C10.4076 14.8501 10.9458 14.2978 11.645 14.2978C12.3441 14.2978 12.8687 14.8641 12.8687 15.5563C12.8687 16.2626 12.3441 16.8288 11.645 16.8288ZM12.8198 14.0111C12.5261 13.6614 12.0435 13.4375 11.5053 13.4375C10.4703 13.4375 9.47748 14.2138 9.47748 15.5703C9.47748 16.906 10.5053 17.696 11.4912 17.696C12.0296 17.696 12.519 17.4582 12.8198 17.0807V17.612H13.7637V13.5215H12.8198V14.0111Z" fill="black"/><path d="M16.2882 16.2764L15.1485 13.5215H14.1415L15.8198 17.4092L14.9596 19.4999H15.9177L18.358 13.5215H17.365L16.2882 16.2764Z" fill="black"/><path d="M33.281 8.39919H33.2548L32.1574 4.65137H30.3852V9.37659H31.5595L31.4936 5.49945H31.5198L32.6985 9.37659H34.3986V4.65137H33.2162L33.281 8.39919Z" fill="black"/><path d="M11.7989 5.09368L11.8255 5.09325L12.462 9.4257H13.7447L12.8646 4.65137H10.7405L9.85541 9.4257H11.1459L11.7989 5.09368Z" fill="black"/><path d="M17.9535 4.65137L17.3646 8.30213H17.3375L16.7494 4.65137H14.8019L14.6967 9.4257H15.8918L15.9216 5.13371H15.9479L16.7455 9.4257H17.957L18.7548 5.13414L18.7812 5.13371L18.811 9.4257H20.0053L19.9001 4.65137H17.9535Z" fill="black"/><path d="M7.36466 9.6133C8.22859 9.6133 8.93884 9.3187 9.05231 8.5216C9.11044 8.10955 9.06776 7.83956 9.04721 7.73913C8.84569 6.73927 7.03427 6.44107 6.89908 5.88194C6.87636 5.78498 6.88188 5.68441 6.89398 5.631C6.92776 5.47775 7.03151 5.31039 7.33001 5.31039C7.60976 5.31039 7.77364 5.48285 7.77364 5.74303V6.0388H8.96516V5.70247C8.96516 4.66258 8.03096 4.5 7.35521 4.5C6.50668 4.5 5.81248 4.7812 5.686 5.55985C5.65138 5.77277 5.6467 5.96339 5.69693 6.20383C5.90401 7.17967 7.60076 7.46162 7.84669 8.0797C7.89341 8.19513 7.87856 8.34318 7.85614 8.43281C7.81729 8.59188 7.70914 8.75418 7.39099 8.75418C7.09247 8.75418 6.91129 8.58123 6.91129 8.32121L6.91013 7.85845H5.62981L5.62939 8.22648C5.62939 9.29163 6.46739 9.6133 7.36466 9.6133Z" fill="black"/><path d="M22.4317 5.89386C22.4085 5.7985 22.4144 5.6991 22.4258 5.646C22.4596 5.49435 22.5626 5.32857 22.8576 5.32857C23.1353 5.32857 23.2971 5.4987 23.2971 5.75687V6.04912H24.477V5.71673C24.477 4.68714 23.5518 4.52637 22.8828 4.52637C22.0433 4.52637 21.3558 4.80407 21.2307 5.57527C21.1962 5.78618 21.1914 5.97489 21.2418 6.21256C21.4461 7.17927 23.1264 7.45825 23.3699 8.07027C23.4156 8.18495 23.4013 8.33075 23.3789 8.42C23.3404 8.57713 23.2336 8.73732 22.9185 8.73732C22.6227 8.73732 22.4431 8.56685 22.4431 8.30877L22.4424 7.8512H21.1746L21.1743 8.21562C21.1743 9.27005 22.0044 9.58827 22.8926 9.58827C23.7478 9.58827 24.4511 9.29682 24.5633 8.50745C24.6207 8.09967 24.5787 7.8326 24.5582 7.73247C24.3583 6.74238 22.565 6.44747 22.4317 5.89386Z" fill="black"/><path d="M29.0542 4.65137H27.8457V8.18347C27.8462 8.24474 27.8445 8.31434 27.8344 8.36579C27.8107 8.48324 27.7086 8.71184 27.3767 8.71184C27.0444 8.71184 26.9417 8.48324 26.9186 8.36579C26.9084 8.31434 26.9059 8.24474 26.9071 8.18347V4.65137H25.6995V8.07464C25.6972 8.16269 25.7063 8.34224 25.7106 8.38889C25.7943 9.27997 26.4987 9.56872 27.3767 9.56872C28.2543 9.56872 28.9587 9.27997 29.042 8.38889C29.0467 8.34224 29.0558 8.16269 29.0542 8.07464V4.65137Z" fill="black"/><path d="M37.3451 6.74429V7.44042H37.8345V8.1338C37.8354 8.19417 37.833 8.261 37.8232 8.31485C37.8016 8.44257 37.681 8.6615 37.3352 8.6615C36.9899 8.6615 36.8694 8.44257 36.847 8.31492C36.8378 8.26107 36.8355 8.19432 36.8358 8.1338V5.9511C36.8358 5.87337 36.8415 5.78799 36.8552 5.72512C36.8815 5.60735 36.9836 5.3787 37.3308 5.3787C37.6959 5.3787 37.7867 5.61987 37.8082 5.72512C37.8224 5.79393 37.8232 5.90703 37.8232 5.90703V6.17465H39.0273V6.01557C39.0273 6.01557 39.0316 5.8533 39.0163 5.70123C38.9282 4.80588 38.187 4.52148 37.3404 4.52148C36.4933 4.52148 35.7709 4.80864 35.6645 5.70123C35.6546 5.78098 35.6443 5.93072 35.6443 6.01557L35.644 8.02415C35.6443 8.11415 35.6468 8.17977 35.6606 8.33855C35.7403 9.20825 36.4933 9.5186 37.34 9.5186C38.1861 9.5186 38.9402 9.20818 39.0191 8.33855C39.0335 8.17977 39.0355 8.11415 39.0364 8.02415V6.74429H37.3451Z" fill="black"/></g></g></svg>`
  },
  { 
    nome: 'Apple', 
    height: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="47" height="24" viewBox="0 0 47 24" fill="none"><path d="M11.6907 6.76152C11.2863 7.23835 10.6392 7.61451 9.99202 7.56079C9.91112 6.916 10.2279 6.23093 10.5987 5.80781C11.0031 5.31752 11.711 4.96827 12.2839 4.94141C12.3514 5.61303 12.0884 6.27123 11.6907 6.76152ZM12.2772 7.68835C11.3402 7.63463 10.538 8.21896 10.0931 8.21896C9.64148 8.21896 8.96065 7.71524 8.21912 7.72865C7.25517 7.74214 6.35862 8.28609 5.86653 9.15249C4.85538 10.8854 5.60363 13.451 6.58107 14.8614C7.05971 15.5599 7.63268 16.3255 8.38762 16.2986C9.10218 16.2718 9.38531 15.8352 10.2482 15.8352C11.1178 15.8352 11.3671 16.2986 12.1222 16.2852C12.9041 16.2718 13.3962 15.5867 13.8748 14.8882C14.4208 14.0957 14.6433 13.3233 14.6568 13.283C14.6433 13.2696 13.1467 12.6987 13.1333 10.9794C13.1198 9.54206 14.3129 8.85701 14.3669 8.8167C13.6928 7.82268 12.6412 7.71524 12.2772 7.68835ZM17.6902 5.74065V16.2113H19.3215V12.6316H21.5797C23.6424 12.6316 25.0918 11.2211 25.0918 9.17938C25.0918 7.13762 23.6694 5.74065 21.6336 5.74065H17.6902ZM19.3215 7.11079H21.2022C22.6179 7.11079 23.4267 7.86298 23.4267 9.18609C23.4267 10.5092 22.6179 11.2682 21.1955 11.2682H19.3215V7.11079ZM28.0713 16.2919C29.0959 16.2919 30.0464 15.7748 30.4778 14.9554H30.5115V16.2113H32.0215V10.9995C32.0215 9.48835 30.8081 8.51444 28.9409 8.51444C27.2084 8.51444 25.9277 9.50176 25.8804 10.8585H27.35C27.4714 10.2137 28.0713 9.79054 28.8937 9.79054C29.8913 9.79054 30.4508 10.254 30.4508 11.1069V11.6846L28.4151 11.8055C26.5209 11.9196 25.4962 12.692 25.4962 14.0353C25.4962 15.3919 26.5546 16.2919 28.0713 16.2919ZM28.5094 15.0494C27.6399 15.0494 27.0871 14.633 27.0871 13.995C27.0871 13.3367 27.6197 12.9539 28.6375 12.8935L30.4508 12.7793V13.3703C30.4508 14.351 29.615 15.0494 28.5094 15.0494ZM34.0371 19.0591C35.6279 19.0591 36.3761 18.4546 37.03 16.621L39.895 8.61524H38.2366L36.3155 14.801H36.2818L34.3606 8.61524H32.6551L35.419 16.2382L35.2707 16.7016C35.0212 17.4875 34.6168 17.7897 33.8955 17.7897C33.7674 17.7897 33.5179 17.7763 33.4169 17.7628V19.0187C33.5112 19.0456 33.9157 19.0591 34.0371 19.0591Z" fill="black"/></svg>`
  },
  { 
    nome: 'Outros', 
    height: 10,
    // Utilizando o último SVG (Hipercard) como placeholder para "Outros" ou como a 8ª bandeira da lista
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none"><mask id="mask0_2005_7765" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="3" width="22" height="18"><path d="M25.4574 3.63184H4.36652V20.3591H25.4574V3.63184Z" fill="white"/></mask><g mask="url(#mask0_2005_7765)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1888 20.1243H24.3889C24.4598 20.044 24.5145 20.0261 24.612 19.9314C24.8461 19.7082 25.0182 19.4311 25.1121 19.126C25.2728 18.6453 25.3081 18.1335 25.2148 17.6364C25.0324 16.7198 24.7575 15.7638 24.5285 14.8436L22.4612 6.47906C22.2226 5.52305 21.6544 4.90268 20.9348 4.50679C19.9396 3.95814 19.1217 4.08939 18.0009 4.35116C17.0337 4.57708 16.0954 4.80228 15.1313 5.0203C14.623 5.13577 7.20654 6.80682 6.56301 7.06214C5.77764 7.37268 5.10456 7.99806 4.81937 8.82425C4.48098 9.80606 4.87404 10.8338 5.10308 11.7633L6.49356 17.328C6.71521 18.2503 6.996 19.1962 7.18807 20.125L7.1888 20.1243Z" fill="#ED6B06"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1178 13.2203L22.0816 12.6222L21.1219 12.6028L21.1514 16.0453L22.2619 16.0618C22.2604 15.4751 22.2471 14.8842 22.2619 14.3155C22.2782 13.6772 22.6705 13.4692 23.3391 13.5609L23.3376 12.5368C22.307 12.4909 22.293 13.0919 22.1178 13.2203ZM20.5634 15.9284L20.4266 15.2112C20.239 15.1826 19.7956 15.3906 19.2061 15.3087C18.8544 15.26 18.4288 15.0513 18.4584 14.687L20.7303 14.682C20.8212 13.6729 20.5529 12.8832 19.7551 12.6143C18.9741 12.3511 18.0143 12.6415 17.6006 13.4326C17.076 14.4367 17.4122 16.0834 19.1522 16.1335C19.7802 16.1515 20.0343 16.0561 20.5634 15.9284ZM7.02197 16.0546H8.14502V14.081H9.96699V16.0546H11.09V11.2695H9.96699V13.102H8.14429V11.2695H7.02124V16.0546H7.02197ZM14.4295 13.112C14.4022 12.4687 14.6512 12.6573 13.4417 12.6222L13.4779 15.293C13.2045 15.2815 13.0375 15.1424 12.9378 14.9502C12.7287 14.55 12.7937 13.6478 12.7937 13.1794L12.793 12.6129H11.6863C11.6197 13.122 11.6515 14.7092 11.8089 15.1374C12.1281 16.008 12.8108 16.0475 13.4713 16.1615V17.4668C13.7254 17.4668 14.3711 17.5026 14.5751 17.4431V16.15C15.6685 16.1486 16.6571 16.1493 17.0132 15.0635C17.1186 14.7193 17.1493 14.3576 17.1034 14.0013C17.0118 13.2124 16.5167 12.6716 15.868 12.562C15.2437 12.4565 14.9319 12.6573 14.51 13.0432C14.4844 13.0674 14.4575 13.0904 14.4295 13.112Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0499 13.4298C14.5786 13.597 14.5756 14.0466 14.5756 14.5981C14.5756 14.7387 14.5763 14.8786 14.5741 15.0191C14.5719 15.1913 14.5261 15.2924 14.6672 15.316C14.8106 15.3397 15.3447 15.3247 15.477 15.2831C16.3355 15.0127 16.0961 13.0591 15.0499 13.4298ZM18.4375 13.9426H19.7304C19.6979 12.9974 18.5616 13.0175 18.4375 13.9426Z" fill="#ED6B06"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2403 11.0781C12.318 11.0782 12.3949 11.0931 12.4667 11.122C12.5385 11.1509 12.6037 11.1933 12.6586 11.2466C12.7135 11.3 12.7571 11.3634 12.7868 11.4331C12.8165 11.5028 12.8318 11.5775 12.8317 11.653C12.8316 11.7284 12.8163 11.8031 12.7865 11.8727C12.7567 11.9424 12.7131 12.0058 12.6581 12.0591C12.6031 12.1124 12.5379 12.1546 12.466 12.1834C12.3942 12.2123 12.3172 12.2271 12.2396 12.2271C12.0825 12.2271 11.9321 12.1666 11.8211 12.0588C11.7101 11.9511 11.6477 11.805 11.6477 11.6526C11.6477 11.5002 11.7101 11.3541 11.8211 11.2464C11.9321 11.1386 12.0825 11.0781 12.2396 11.0781H12.2403Z" fill="#FFED00"/></g></svg>`
  }
])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value || 0)
}

const formatNumberOnly = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value || 0)
}

const formatPercentage = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value || 0)
}

const faturamentoHighlights = computed(() => {
  const { faturamento } = data.value
  return [
    { id: 'recebido', label: 'Faturamento recebido', value: faturamento.recebido, dotColor: '#2962ff', format: 'currency' },
    { id: 'previsto', label: 'Faturamento previsto', value: faturamento.previsto, dotColor: '#8e2de2', format: 'currency', chip: 'D+2' },
    { id: 'pendente', label: 'Vendas pendentes', value: faturamento.vendasPendentes, dotColor: '#ff8a00', format: 'currency' },
    { id: 'ticket', label: 'Ticket médio', value: faturamento.ticketMedio, dotColor: '#ff4ecd', format: 'currency' },
    {
      id: 'numero',
      label: 'Número de cobranças',
      value: faturamento.numeroCobrancas.toLocaleString('pt-BR'),
      dotColor: '#2a2e33',
      format: 'text'
    }
  ]
})

const statusCards = computed(() => {
  return data.value.statusTransacoes.slice(0, 4).map((status) => {
    // Lógica simples de cor para o mobile
    let cor = 'text-gray-500'
    if (status.tipo === 'Reembolsos' || status.tipo === 'Chargebacks') cor = 'text-[#EA5455]' // Vermelho/Laranja
    if (status.tipo === 'Cancelados') cor = 'text-[#FF9F43]' // Amarelo
    
    return {
      ...status,
      valorFormatado: formatCurrency(status.valor),
      percentualFormatado: `${formatPercentage(status.percentual)}%`,
      corTextoMobile: cor
    }
  })
})

const fetchData = async () => {
  try {
    const response = await DashboardService.getDashboardData()
    data.value = response
  } catch (error) {
    console.error('Erro ao carregar dados:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
/* Esconde scrollbar horizontal no mobile */
.hide-scroll::-webkit-scrollbar {
  display: none;
}
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Ajuste para safe area no iPhone */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 20px);
}

.btn-shadow-cob {
  border-radius: 250px;
  border: 3px solid #909fe5;
  background: #2A2E33;
  box-shadow: 0 -19px 36.6px 0 rgba(6, 65, 252, 0.35) inset, 0 4px 10.3px 0 rgba(133, 45, 246, 0.57) inset;
}
</style>