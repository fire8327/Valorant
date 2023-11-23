<template>
    <footer class="grid-container pt-16 md:pt-20 xl:pt-40 z-[1] mt-auto">
        <div class="flex flex-col items-center gap-8 md:gap-12 xl:gap-[56px]">
            <p class="text-2xl md:text-[40px] xl:text-[55px]">CONTACTS</p>
            <div class="flex items-center gap-9 xl:gap-16">
                <NuxtLink to="/" class="group relative hover:scale-125 hover:outline-[#2EECC5]/10 transition-all duration-500 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 xl:w-20 xl:h-20 bg-white outline outline-1 outline-white/10 outline-offset-[10px]">
                    <Icon name="ic:baseline-telegram" class="text-2xl md:text-3xl xl:text-4xl text-black z-[2]"/>
                    <span class="absolute w-full h-full z-[1] radial top-0 left-0 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500"></span>
                </NuxtLink>
                <NuxtLink to="/" class="group relative hover:scale-125 hover:outline-[#2EECC5]/10 transition-all duration-500 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 xl:w-20 xl:h-20 bg-white outline outline-1 outline-white/10 outline-offset-[10px]">
                    <Icon name="ic:baseline-discord" class="text-2xl md:text-3xl xl:text-4xl text-black z-[2]"/>
                    <span class="absolute w-full h-full z-[1] radial top-0 left-0 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500"></span>
                </NuxtLink>
                <NuxtLink to="/" class="group relative hover:scale-125  hover:outline-[#2EECC5]/10 transition-all duration-500 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 xl:w-20 xl:h-20 bg-white outline outline-1 outline-white/10 outline-offset-[10px]">
                    <Icon name="mdi:twitch" class="text-2xl md:text-3xl xl:text-4xl text-black z-[2]"/>
                    <span class="absolute w-full h-full z-[1] radial top-0 left-0 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500"></span>
                </NuxtLink>
            </div>
            <div class="flex items-center gap-9 mt-4">
                <NuxtLink to="/">                    
                    <img src="/images/footer/valorant.png" alt="" class="w-[35px] xl:w-[50px]">
                </NuxtLink>
                <NuxtLink to="/">                    
                    <img src="/images/footer/riot.png" alt="" class="w-[70px] xl:w-[100px]">
                </NuxtLink>
            </div>
            <p class="max-w-[620px] text-center font-normal text-base text-white/50">
                © 2023 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
            </p>
        </div>

    </footer>
</template>

<style>
    .radial{
        background: radial-gradient(77.86% 77.86% at 49.29% 50.71%, #2EECC5 0%, #00644F 100%);
    }
</style>

