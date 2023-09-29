<template>
    <header class="w-full bg-[#111111] py-4 grid-container Neue relative" ref="header">
        <div class="flex justify-between items-center">
            <NuxtLink to="/">
                <Icon name="simple-icons:valorant" class="text-white text-4xl"/>  
            </NuxtLink>
            <div class="flex items-center gap-4 uppercase text-sm font-semibold max-lg:absolute max-lg:left-0 max-lg:w-full max-lg:bg-[#111111] max-lg:flex-col max-lg:py-4 max-lg:z-50 duration-500 transition-all" :class="isMenuShow ? 'max-lg:top-full max-lg:border-t max-lg:border-white' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/about" @click="isMenuShow = !isMenuShow" class="relative px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors hover:bg-[#8080804d] after:w-full after:h-1 after:rounded-full after:bg-transparent after:duration-300 after:transition-colors hover:after:bg-[#ff4655] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
                    О нас
                </NuxtLink> 
                <NuxtLink to="/agents" @click="isMenuShow = !isMenuShow" class="relative px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors hover:bg-[#8080804d] after:w-full after:h-1 after:rounded-full after:bg-transparent after:duration-300 after:transition-colors hover:after:bg-[#ff4655] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
                    Агенты
                </NuxtLink> 
                <NuxtLink to="/maps" @click="isMenuShow = !isMenuShow" class="relative px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors hover:bg-[#8080804d] after:w-full after:h-1 after:rounded-full after:bg-transparent after:duration-300 after:transition-colors hover:after:bg-[#ff4655] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
                    Карты
                </NuxtLink> 
                <NuxtLink to="/about" @click="isMenuShow = !isMenuShow" class="relative px-4 py-2 text-white bg-transparent rounded-lg duration-300 transition-colors hover:bg-[#8080804d] after:w-full after:h-1 after:rounded-full after:bg-transparent after:duration-300 after:transition-colors hover:after:bg-[#ff4655] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
                    О нас
                </NuxtLink> 
            </div>
            <button @click="isMenuShow = !isMenuShow" class="flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100 cursor-pointer lg:hidden" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
                <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] transition-opacity ease-linear duration-300"></span>
                <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
            </button> 
            <div class="bg-[#00000099] opacity-50 absolute inset-0 min-h-screen max-lg:z-40 top-full lg:hidden" :class="{'hidden' : !isMenuShow}"></div>           
        </div>
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)

    const header = ref()
    onMounted(() => {
        let headerHeight = header.value.clientHeight
        window.addEventListener("resize", () => {
            headerHeight = header.value.clientHeight
            console.log(headerHeight)
        })
    })    
</script>
