<template>
    <header class="w-full bg-[#111111] py-4 grid-container Neue relative">
        <div class="flex justify-between items-center">
            <NuxtLink to="/index">
                <Icon name="simple-icons:valorant" class="text-white text-4xl"/>  
            </NuxtLink>
            <div class="flex items-center gap-4 uppercase text-sm font-semibold max-lg:absolute max-lg:left-0 max-lg:w-full max-lg:bg-[#111111] max-lg:flex-col max-lg:py-4 max-lg:z-50 duration-500 transition-all" :class="isMenuShow ? 'max-lg:top-full max-lg:border-t max-lg:border-white' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/" class="flex flex-col gap-2 group">
                    <span class="w-full px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors group-hover:bg-[#8080804d]">Ссылка</span>
                    <span class="w-full h-1 rounded-full bg-transparent duration-300 transition-colors group-hover:bg-[#ff4655]"></span>
                </NuxtLink> 
                <NuxtLink to="/" class="flex flex-col gap-2 group">
                    <span class="w-full px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors group-hover:bg-[#8080804d]">Ссылка</span>
                    <span class="w-full h-1 rounded-full bg-transparent duration-300 transition-colors group-hover:bg-[#ff4655]"></span>
                </NuxtLink> 
                <NuxtLink to="/" class="flex flex-col gap-2 group">
                    <span class="w-full px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors group-hover:bg-[#8080804d]">Ссылка</span>
                    <span class="w-full h-1 rounded-full bg-transparent duration-300 transition-colors group-hover:bg-[#ff4655]"></span>
                </NuxtLink> 
                <NuxtLink to="/" class="flex flex-col gap-2 group">
                    <span class="w-full px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors group-hover:bg-[#8080804d]">Ссылка</span>
                    <span class="w-full h-1 rounded-full bg-transparent duration-300 transition-colors group-hover:bg-[#ff4655]"></span>
                </NuxtLink> 
                <NuxtLink to="/" class="flex flex-col gap-2 group">
                    <span class="w-full px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors group-hover:bg-[#8080804d]">Ссылка</span>
                    <span class="w-full h-1 rounded-full bg-transparent duration-300 transition-colors group-hover:bg-[#ff4655]"></span>
                </NuxtLink>
            </div>
            <button @click="isMenuShow = !isMenuShow" class="flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100 cursor-pointer lg:hidden" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
                <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] transition-opacity ease-linear duration-300"></span>
                <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
            </button> 
            <div class="bg-[#00000099] opacity-50 absolute inset-0 min-h-screen max-lg:z-40 top-full" :class="{'hidden' : !isMenuShow}"></div>           
        </div>
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)
</script>
