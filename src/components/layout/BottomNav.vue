<template>
  <nav class="block lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
    <div class="relative flex items-center w-full h-[70px]">
      
      <div class="flex flex-1 items-center justify-center gap-8">
        <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2.214 19.286C3.68 20.75 6.036 20.75 10.75 20.75C15.464 20.75 17.821 20.75 19.285 19.285C20.75 17.822 20.75 15.464 20.75 10.75C20.75 6.036 20.75 3.679 19.285 2.214C17.822 0.75 15.464 0.75 10.75 0.75C6.036 0.75 3.679 0.75 2.214 2.214C0.75 3.68 0.75 6.036 0.75 10.75C0.75 15.464 0.75 17.822 2.214 19.286Z" stroke="#2A2E33" stroke-width="1.5"/>
            <path d="M16.75 7.25H12.75M16.75 13.25H12.75M16.75 16.25H12.75M8.75 7.25H6.75M6.75 7.25H4.75M6.75 7.25V5.25M6.75 7.25V9.25M8.25 13.25L6.75 14.75M6.75 14.75L5.25 16.25M6.75 14.75L5.25 13.25M6.75 14.75L8.25 16.25" stroke="#2A2E33" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="text-[10px] font-medium text-[#86898B]">Simule</span>
        </button>

        <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.6 2.376 15.112 3.043 16.453C3.221 16.809 3.28 17.216 3.177 17.601L2.582 19.827C2.52307 20.0473 2.52312 20.2792 2.58216 20.4995C2.64119 20.7197 2.75712 20.9206 2.91831 21.0819C3.07951 21.2432 3.2803 21.3593 3.50053 21.4184C3.72075 21.4776 3.95267 21.4778 4.173 21.419L6.399 20.823C6.78538 20.7254 7.19414 20.7727 7.548 20.956C8.93095 21.6446 10.4551 22.002 12 22Z" stroke="#2A2E33" stroke-width="1.5"/>
            <path d="M12 15.333C13.105 15.333 14 14.587 14 13.667C14 12.747 13.105 12 12 12C10.895 12 10 11.254 10 10.333C10 9.413 10.895 8.667 12 8.667M12 15.333C10.895 15.333 10 14.587 10 13.667M12 15.333V16M12 8.667V8M12 8.667C13.105 8.667 14 9.413 14 10.333" stroke="#2A2E33" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="text-[10px] font-medium text-[#86898B]">Cobranças</span>
        </button>
      </div>

      <div class="w-16 flex-shrink-0"></div>

      <div class="absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center">
        <button 
          class="w-[54px] h-[54px] bg-[#0641FC] rounded-full flex items-center justify-center text-white shadow-lg border-[6px] border-[#edeff4] z-10 hover:bg-blue-700 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10.75 7C10.75 6.80109 10.671 6.61032 10.5303 6.46967C10.3897 6.32902 10.1989 6.25 10 6.25C9.80109 6.25 9.61032 6.32902 9.46967 6.46967C9.32902 6.61032 9.25 6.80109 9.25 7V9.25H7C6.80109 9.25 6.61032 9.32902 6.46967 9.46967C6.32902 9.61032 6.25 9.80109 6.25 10C6.25 10.1989 6.32902 10.3897 6.46967 10.5303C6.61032 10.671 6.80109 10.75 7 10.75H9.25V13C9.25 13.1989 9.32902 13.3897 9.46967 13.5303C9.61032 13.671 9.80109 13.75 10 13.75C10.1989 13.75 10.3897 13.671 10.5303 13.5303C10.671 13.3897 10.75 13.1989 10.75 13V10.75H13C13.1989 10.75 13.3897 10.671 13.5303 10.5303C13.671 10.3897 13.75 10.1989 13.75 10C13.75 9.80109 13.671 9.61032 13.5303 9.46967C13.3897 9.32902 13.1989 9.25 13 9.25H10.75V7Z" fill="#F5F5F5"/>
        </svg>
        </button>
        <div class="mt-3 w-1.5 h-1.5 bg-[#0641FC] rounded-full"></div>
      </div>

      <div class="flex flex-1 items-center justify-center gap-8">
        <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 10H10" stroke="#2A2E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.833 11H18.231C16.446 11 15 12.343 15 14C15 15.657 16.447 17 18.23 17H20.833C20.917 17 20.958 17 20.993 16.998C21.533 16.965 21.963 16.566 21.998 16.065C22 16.033 22 15.994 22 15.917V12.083C22 12.006 22 11.967 21.998 11.935C21.962 11.434 21.533 11.035 20.993 11.002C20.958 11 20.917 11 20.833 11Z" stroke="#2A2E33" stroke-width="1.5"/>
            <path d="M20.965 11C20.887 9.128 20.637 7.98 19.828 7.172C18.657 6 16.771 6 13 6H10C6.229 6 4.343 6 3.172 7.172C2.001 8.344 2 10.229 2 14C2 17.771 2 19.657 3.172 20.828C4.344 21.999 6.229 22 10 22H13C16.771 22 18.657 22 19.828 20.828C20.637 20.02 20.888 18.872 20.965 17" stroke="#2A2E33" stroke-width="1.5"/>
            <path d="M6 5.99995L9.735 3.52295C10.2604 3.18165 10.8735 3 11.5 3C12.1265 3 12.7396 3.18165 13.265 3.52295L17 5.99995" stroke="#2A2E33" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M17.991 14H18.001" stroke="#2A2E33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-[10px] font-medium text-[#86898B]">Carteira</span>
        </button>

        <button class="flex flex-col items-center justify-center gap-1 min-w-[60px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2.5 6.5C2.5 4.614 2.5 3.672 3.086 3.086C3.672 2.5 4.614 2.5 6.5 2.5C8.386 2.5 9.328 2.5 9.914 3.086C10.5 3.672 10.5 4.614 10.5 6.5C10.5 8.386 10.5 9.328 9.914 9.914C9.328 10.5 8.386 10.5 6.5 10.5C4.614 10.5 3.672 10.5 3.086 9.914C2.5 9.328 2.5 8.386 2.5 6.5ZM13.5 17.5C13.5 15.614 13.5 14.672 14.086 14.086C14.672 13.5 15.614 13.5 17.5 13.5C19.386 13.5 20.328 13.5 20.914 14.086C21.5 14.672 21.5 15.614 21.5 17.5C21.5 19.386 21.5 20.328 20.914 20.914C20.328 21.5 19.386 21.5 17.5 21.5C15.614 21.5 14.672 21.5 14.086 20.914C13.5 20.328 13.5 19.386 13.5 17.5ZM2.5 17.5C2.5 15.614 2.5 14.672 3.086 14.086C3.672 13.5 4.614 13.5 6.5 13.5C8.386 13.5 9.328 13.5 9.914 14.086C10.5 14.672 10.5 15.614 10.5 17.5C10.5 19.386 10.5 20.328 9.914 20.914C9.328 21.5 8.386 21.5 6.5 21.5C4.614 21.5 3.672 21.5 3.086 20.914C2.5 20.328 2.5 19.386 2.5 17.5ZM13.5 6.5C13.5 4.614 13.5 3.672 14.086 3.086C14.672 2.5 15.614 2.5 17.5 2.5C19.386 2.5 20.328 2.5 20.914 3.086C21.5 3.672 21.5 4.614 21.5 6.5C21.5 8.386 21.5 9.328 20.914 9.914C20.328 10.5 19.386 10.5 17.5 10.5C15.614 10.5 14.672 10.5 14.086 9.914C13.5 9.328 13.5 8.386 13.5 6.5Z" stroke="#2A2E33" stroke-width="1.5"/>
          </svg>
          <span class="text-[10px] font-medium text-[#86898B]">Menu</span>
        </button>
      </div>

    </div>
  </nav>
</template>