<template>
    <!-- <div class="col-span-full w-full h-screen -mt-8 xl:-mt-12 flex flex-col justify-center items-center gap-4 md:gap-8 xl:gap-12 relative text-white">
        <img src="/images/hero/start.jpg" class="absolute inset-0 z-[1] object-cover w-full h-full"/>
        <div class="absolute inset-0 z-[2] w-full h-full bg-black/40"></div>
        <img src="/images/hero/overlay.png" class="absolute inset-0 z-[3] object-cover w-full h-full"/>
        <p class="uppercase text-3xl md:text-4xl xl:text-6xl z-10">Название</p>
        <p class="text-center z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="relative group z-10 max-md:w-[280px] w-[300px] h-[60px] uppercase text-sm bg-[#ff4655] text-white after:absolute after:-top-1.5 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%+12px)] after:h-1/2 after:border-t after:border-x after:border-[#bdbcb7] before:absolute before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%+12px)] before:h-1/2 before:border-b before:border-x before:border-[#bdbcb7]">
            <span class="w-full h-full flex items-center justify-center relative after:absolute after:w-[120%] after:h-full after:bg-[#101822] after:skew-x-[-10deg] z-[1] after:-z-[1] after:-translate-x-full after:transition-transform after:duration-300 group-hover:after:translate-x-0 overflow-hidden before:absolute before:h-1 before:w-1 before:bg-[#101822] before:right-0 before:bottom-0 before:transition-colors before:duration-300 group-hover:before:bg-white">Начать знакомство</span>
        </button>
    </div> -->
    <div class="w-full" :style="`height: calc(100vh - ${header.height}px)`"></div>
    <div class="flex flex-col gap-16 md:gap-20 xl:gap-36 pt-20 md:pt-36 xl:pt-56">
        <div class="flex lg:items-center justify-between max-lg:flex-col gap-8 lg:gap-10">
            <div class="flex flex-col gap-4 w-full lg:max-w-[55%]">
                <p class="main_title text-2xl md:text-[40px] xl:text-[55px] uppercase">Об игре</p>
                <p class="text-sm xl:text-base text-white/60">Сочетайте свой стиль и опыт на глобальной конкурентной арене. У вас есть 13 раундов, чтобы атаковать и защищать свою сторону, используя острую стрельбу и тактические способности. И, имея по одной жизни за раунд, вам нужно будет думать быстрее, чем ваш противник, если вы хотите выжить. Сразитесь с врагами в соревновательном и нерейтинговом режимах, а также в Deathmatch и Spike Rush.</p>
            </div>
            <div class="w-full lg:max-w-[45%] bg-black h-[335px]"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-9">
            <Tactic v-bind="tactic" v-for="tactic in tactics"/>
        </div>
    </div>
    
</template>

<script setup>
    import { useHeader } from '~/stores/header'
    
    const header = useHeader()

    const tactics = [
        {title: "Агенты", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {title: "Оружие", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {title: "Карты", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]
</script>

