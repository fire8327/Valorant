<template>
    <div class="flex gap-6 max-lg:flex-col">
        <div class="bg-gradient-to-br from-[#232325] to-[#2EECC5] rounded-xl p-px lg:w-1/2">
            <img src="https://valorantfiles.com/images/maps/12452a9d-48c3-0b02-e7eb-0381c3520404/splash.png" alt="" class="w-full h-full rounded-xl">
        </div>
        <div class="flex flex-col lg:w-1/2 gap-4 text-[22px]">
            <div class="w-full py-2 bg-[#232325]/70 rounded-lg border border-white/20">
                <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase text-center">Карта - <span class="main_title tracking-widest">{{ map[0].title }}</span></p>
            </div>
            <p>{{ map[0].desc }}</p>
            <p>Координаты - <span class="main_title tracking-widest">{{ map[0].location[0] }}, {{ map[0].location[1] }}</span></p>
        </div>    
    </div>
    <div class="flex flex-col gap-4">
        <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase main_title tracking-widest">Тактическая карта</p>
        <div class="relative w-full lg:w-3/5 mx-auto max-lg:h-[calc(100vw-30px)] lg:h-[600px] xl:h-[700px]">
            <img src="https://blitz-cdn-plain.blitz.gg/blitz/val/maps/lotus/images/lotus-layout-base.svg" alt="" class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src="https://blitz-cdn-plain.blitz.gg/blitz/val/maps/lotus/images/lotus-offense-walls.svg" alt="" class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src="https://blitz-cdn-plain.blitz.gg/blitz/val/maps/lotus/images/lotus-offense-callouts.svg" alt="" class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <p class="text-[10px] text-white/20 absolute left-1/2 -translate-x-1/2 bottom-0">* фото с сайта blitz.gg</p>
        </div>
    </div>
    <div class="flex flex-col gap-4 -mt-6">
        <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase main_title tracking-widest">Позиции</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-[20px] md:text-[22px] xl:text-[25px] gap-4 max-xl:px-4">
            <p class="before:w-1.5 before:h-1.5 before:rounded-full before:shrink-0 before:bg-[#2EECC5] relative before:absolute before:top-4 before:-left-4" v-for="callout in map[0].callouts">{{ callout.position }} - <span class="main_title">{{ callout.point }}</span></p>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const supabase = useSupabaseClient() 
    const { data: maps } = await useAsyncData('maps', async() => supabase.from('maps').select().order('id', { ascending: true }), {transform: result => result.data})
    const map = ref()
    map.value = maps.value.filter(el => {
        return el.id == id
    })


</script>
