<template>
    <div class="w-full px-4 md:px-6 xl:px-8 py-2 bg-gradient-to-r from-[#232325] via-[#232325] to-transparent rounded-lg">
        <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase main_title tracking-widest">Агенты</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <NuxtLink :to="`/agents/agent-${agent.id}`" class="flex flex-col gap-4 h-full border border-white/20 transition-all duration-300 relative overflow-hidden hover:scale-110 hover:shadow-[0px_0px_38px_0px_rgba(46,236,197,0.20)] items-center text-center rounded-xl" v-for="agent in agents">
            <NuxtImg :src="`/images/agents/icons/${agent.name}.webp`" width="512px" height="512px" sizes="100vw" alt="" class="w-full aspect-square object-cover object-center"/>
            <p class="uppercase text-lg font-bold text-[#B5FEEF]">{{ agent.name }}</p>
            <p class="text-white/90 leading-[123.1%] font-normal px-2 grow">{{ agent.desc.substring(0, 150) }}...</p>
            <span class="w-full left-0 bottom-0 h-2 bg-[#2EECC5]"></span>
            <span class="absolute top-0 left-0 inset-0 backdrop-blur-3xl -z-[1]"></span>
        </NuxtLink>
    </div>
</template>

<script setup>
    const supabase = useSupabaseClient() 
    const { data: agents } = await useAsyncData('agents', async() => supabase.from('agents').select().order('id', { ascending: true }), {transform: result => result.data})
</script>