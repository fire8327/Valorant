<template>
    <div class="w-full px-4 md:px-6 xl:px-8 py-2 bg-gradient-to-r from-[#232325] via-[#232325] to-transparent rounded-lg">
        <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase main_title tracking-widest">Карты</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <NuxtLink :to="`/maps/map-${map.id}`" class="flex flex-col gap-4 h-full border border-white/20 transition-all duration-300 relative overflow-hidden hover:scale-110 hover:shadow-[0px_0px_38px_0px_rgba(46,236,197,0.20)] items-center text-center rounded-xl" v-for="map in maps">
            <img loading="lazy" :src="`/images/maps/${map.catalogImg}.webp`" alt="" class="w-full">
            <p class="uppercase text-lg font-bold text-[#B5FEEF]">{{ map.title }}</p>
            <p class="text-white/90 leading-[123.1%] font-normal px-2 grow">{{ map.desc.substring(0, 150) }}...</p>
            <div class="w-full left-0 bottom-0 h-2 bg-[#2EECC5]"></div>
            <div class="absolute top-0 left-0 inset-0 backdrop-blur-3xl -z-[1]"></div>
        </NuxtLink>
    </div>
</template>

<script setup>
    const supabase = useSupabaseClient() 
    const { data: maps } = await useAsyncData('maps', async() => supabase.from('maps').select().order('id', { ascending: true }), {transform: result => result.data})
</script>