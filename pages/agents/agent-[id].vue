<template>
    <div class="flex flex-col gap-8">
        <div class="py-2 bg-[#232325]/70 rounded-lg border border-white/20">
            <p class="text-2xl md:text-[40px] xl:text-[50px] uppercase text-center">Агент - <span class="main_title tracking-widest"> {{ agent[0].name }} </span></p>
        </div>
        <div class="flex items-start gap-6 max-lg:flex-col">
            <div class="w-full lg:w-1/2">
                <NuxtImg :src="`/images/agents/full/${agent[0].name}.webp`" width="2048px" height="1860px" sizes="100vw" alt="" class="w-full"/>
            </div>
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <div class="flex flex-col text-lg xl:text-xl gap-1">
                    <p class="text-white/70">//NAME</p>                        
                    <p>{{ agent[0].name }}</p>
                </div>
                <div class="flex flex-col gap-1 text-lg xl:text-xl">
                    <p class="text-white/70">//ROLE</p>
                    <div class="flex items-center gap-4">
                        <p class="text-2xl md:text-3xl xl:text-4xl main_title tracking-widest">{{ agentClass.title }} </p>
                        <NuxtImg :src="`/images/agents/class/${agentClass.title}.png`" alt="" class="w-6 h-6"/>
                    </div>
                    <p>{{ agentClass.desc }}</p>
                </div>
                <div class="flex flex-col gap-1 text-lg xl:text-xl">
                    <p class="text-white/70">//BIOGRAPHY</p>
                    <p>{{ agent[0].desc }}</p>
                </div>
                <div class="flex flex-col gap-1 text-lg xl:text-xl">
                    <p class="text-white/70">//REGION</p>
                    <div class="flex items-center gap-4">
                        <p>{{ agent[0].region.country }}</p>
                        <NuxtImg :src="`/images/agents/flags/${agent[0].region.icon}.png`" alt="" class="w-8 h-8"/>
                    </div>
                </div>                  
            </div>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const supabase = useSupabaseClient() 
    const { data: agents } = await useAsyncData('agents', async() => supabase.from('agents').select().order('id', { ascending: true }), {transform: result => result.data})
    const agent = ref()
    agent.value = agents.value.filter(el => {
        return el.id == id
    })
    const { data: agentClass } = await useAsyncData('agentClass', async() => supabase.from('agentClass').select().eq('id', `${agent.value[0].class}`).order('id', { ascending: true }), {transform: result => result.data[0]})
</script>