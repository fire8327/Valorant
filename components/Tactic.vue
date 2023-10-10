<template>
    <div class="relative flex flex-col gap-4 xl:gap-6 rounded-md p-6 xl:p-10 bg-gradient-to-br from-[#303134] via-[#282828] to-[#282828] border border-white/20" ref="tacticEl">
        <p class="uppeercase text-lg md:text-xl xl:text-2xl z-[1]">{{ props.title }}</p>
        <p class="text-sm xl:text-base text-white/90 z-[1]">{{ props.desc }}</p>
        <div class="absolute w-full h-full inset-0 transition-all duration-500" :class="isTacticShow ? 'opacity-100' : 'opacity-0'" :style="`background: radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.3), transparent 40%)`"></div>
    </div>
</template>

<script setup>
    const tacticEl = ref()
    const x = ref()
    const y = ref()
    const isTacticShow = ref(false)
    onMounted(() => {
        tacticEl.value.addEventListener('mousemove', e => {
            isTacticShow.value = true
            const rect = tacticEl.value.getBoundingClientRect()
            x.value = e.clientX - rect.left
            y.value = e.clientY - rect.top
        })
        tacticEl.value.addEventListener('mouseleave', e => {
            isTacticShow.value = false
        })
    })

    const props = defineProps({
        title: String,
        desc: String
    })
</script>
