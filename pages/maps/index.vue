<template>
    <div class="w-full px-4 md:px-6 xl:px-8 py-2 bg-gradient-to-r from-[#232325] via-[#232325] to-transparent rounded-lg">
        <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase main_title tracking-widest">Карты</p>
    </div>
    <div class="flex flex-col gap-4">
        <p class="text-xl md:text-3xl xl:text-4xl uppercase text-white/90 tracking-wider">Соревновательные</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <NuxtLink :to="`/maps/map-${competitiveMap.id}`" class="flex flex-col gap-4 h-full border border-white/20 transition-all duration-300 relative overflow-hidden lg:hover:scale-110 lg:hover:shadow-[0px_0px_38px_0px_rgba(46,236,197,0.20)] items-center text-center rounded-xl" v-for="competitiveMap in competitiveMaps">
                <NuxtImg width="1920px" height="1080px" sizes="100vw" :src="`/images/maps/main/${competitiveMap.title}.webp`" alt="" class="w-full aspect-[7/10] object-cover object-center"/>
                <p class="uppercase text-lg font-bold text-[#B5FEEF]">{{ competitiveMap.title }}</p>
                <p class="text-white/90 leading-[123.1%] font-normal px-2 grow">{{ competitiveMap.desc.substring(0, 150) }}...</p>
                <span class="w-full left-0 bottom-0 h-2 bg-[#2EECC5]"></span>
                <span class="absolute top-0 left-0 inset-0 backdrop-blur-3xl -z-[1]"></span>
            </NuxtLink>
        </div>
    </div>
    <div class="flex flex-col gap-4">
        <p class="text-xl md:text-3xl xl:text-4xl uppercase text-white/90 tracking-wider">Командный бой насмерть</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <NuxtLink :to="`/maps/map-${dmMap.id}`" class="flex flex-col gap-4 h-full border border-white/20 transition-all duration-300 relative overflow-hidden lg:hover:scale-110 lg:hover:shadow-[0px_0px_38px_0px_rgba(46,236,197,0.20)] items-center text-center rounded-xl" v-for="dmMap in dmMaps">
                <NuxtImg width="1920px" height="1080px" sizes="100vw" :src="`/images/maps/main/${dmMap.title}.webp`" alt="" class="w-full aspect-[7/10] object-cover object-center"/>
                <p class="uppercase text-lg font-bold text-[#B5FEEF]">{{ dmMap.title }}</p>
                <p class="text-white/90 leading-[123.1%] font-normal px-2 grow">{{ dmMap.desc.substring(0, 150) }}...</p>
                <span class="w-full left-0 bottom-0 h-2 bg-[#2EECC5]"></span>
                <span class="absolute top-0 left-0 inset-0 backdrop-blur-3xl -z-[1]"></span>
            </NuxtLink>
        </div>
    </div>
    <div class="flex flex-col gap-4">
        <p class="text-xl md:text-3xl xl:text-4xl uppercase text-white/90 tracking-wider">Тренировка</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <NuxtLink :to="`/maps/map-${range[0].id}`" class="flex flex-col gap-4 h-full border border-white/20 transition-all duration-300 relative overflow-hidden lg:hover:scale-110 lg:hover:shadow-[0px_0px_38px_0px_rgba(46,236,197,0.20)] items-center text-center rounded-xl">
                <NuxtImg width="1920px" height="1080px" sizes="100vw" :src="`/images/maps/main/${range[0].title}.webp`" alt="" class="w-full aspect-[7/10] object-cover object-center"/>
                <p class="uppercase text-lg font-bold text-[#B5FEEF]">{{ range[0].title }}</p>
                <p class="text-white/90 leading-[123.1%] font-normal px-2 grow">{{ range[0].desc.substring(0, 150) }}...</p>
                <span class="w-full left-0 bottom-0 h-2 bg-[#2EECC5]"></span>
                <span class="absolute top-0 left-0 inset-0 backdrop-blur-3xl -z-[1]"></span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const supabase = useSupabaseClient() 
    const { data: maps } = await useAsyncData('maps', async() => supabase.from('maps').select().order('id', { ascending: true }), {transform: result => result.data})
    const competitiveMaps = maps.value.filter(el => {
        return el.type == 'competitive'
    })
    const dmMaps = maps.value.filter(el => {
        return el.type == 'dm'
    })
    const range = maps.value.filter(el => {
        return el.type == 'range'
    })
</script>