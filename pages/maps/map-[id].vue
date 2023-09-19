<template>
    <!-- <div>
        {{ id }}
    </div>
    <pre>
        {{  mapDetail }}
    </pre> -->
    <div class="flex flex-col gap-[100px]">
        <h1 class="font-medium text-[64px] font-Roboto">MAP - {{  mapDetail.data.displayName }}</h1>
        <p class="font-Roboto text-2xl font-normal">
            {{  mapDetail.data.narrativeDescription }}
        </p>
        <div class="flex flex-col gap-4">            
            <img :src="mapDetail.data.splash" class="lg:max-w-[900px] object-contain mx-auto border-black border-[5px]" alt="">
            <p class="font-Roboto text-2xl font-normal text-center">
                {{  mapDetail.data.coordinates }}
            </p>
        </div>
        <img :src="mapDetail.data.displayIcon" class="lg:max-w-[700px] object-contain mx-auto" alt="">
        <h2 class="font-medium text-[64px] font-Roboto">CALLOUTS</h2>
        <div class="grid grid-cols-4 gap-x-16 gap-y-10">
            <div v-for="callout in mapDetail.data.callouts" class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <p class="text-2xl font-semibold font-Source-Code">{{ callout.regionName }}</p>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    const { id } = useRoute().params

    const { data: mapDetail } = await useFetch(() => `https://valorant-api.com/v1/maps/${id}`)
</script>
