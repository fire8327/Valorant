<template>
    <header class="w-full py-8 lg:py-10 xl:py-[54px] grid-container relative uppercase text-sm md:text-base xl:text-lg lg:z-[1]" ref="height">
        <div class="flex justify-between items-center">
            <NuxtLink to="/" class="max-lg:z-40">
                <Icon name="simple-icons:valorant" class="text-4xl lg:text-5xl"/>  
            </NuxtLink>
            <div class="flex items-center lg:gap-12 xl:gap-[52px] max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-gradient-to-br from-[#303134] via-[#282828] to-[#282828] mobile_menu max-lg:flex-col max-lg:pt-24 max-lg:pb-4 max-lg:z-30 duration-500 transition-all" :class="{'max-lg:top-0 max-lg:-translate-y-full':!isMenuShow}">
                <NuxtLink to="/" class="max-lg:w-full max-lg:flex max-lg:justify-center relative group" @click="isMenuShow = !isMenuShow">
                    <span class="max-lg:w-full max-lg:text-center max-lg:py-3 max-lg:px-4">Главная</span>
                    <span class="max-lg:hidden absolute link_bg rounded-full w-full h-2 left-0 md:-top-[54px] xl:-top-[68px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                </NuxtLink>
                <NuxtLink to="/about" class="max-lg:w-full max-lg:flex max-lg:justify-center relative group" @click="isMenuShow = !isMenuShow">
                    <span class="max-lg:w-full max-lg:text-center max-lg:py-3 max-lg:px-4">О нас</span>
                    <span class="max-lg:hidden absolute link_bg rounded-full w-full h-2 left-0 md:-top-[54px] xl:-top-[68px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                </NuxtLink>
                <NuxtLink to="/agents" class="max-lg:w-full max-lg:flex max-lg:justify-center relative group" @click="isMenuShow = !isMenuShow">
                    <span class="max-lg:w-full max-lg:text-center max-lg:py-3 max-lg:px-4">Агенты</span>
                    <span class="max-lg:hidden absolute link_bg rounded-full w-full h-2 left-0 md:-top-[54px] xl:-top-[68px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                </NuxtLink>
                <NuxtLink to="/maps" class="max-lg:w-full max-lg:flex max-lg:justify-center relative group" @click="isMenuShow = !isMenuShow">
                    <span class="max-lg:w-full max-lg:text-center max-lg:py-3 max-lg:px-4">Карты</span>
                    <span class="max-lg:hidden absolute link_bg rounded-full w-full h-2 left-0 md:-top-[54px] xl:-top-[68px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                </NuxtLink>
                <NuxtLink to="/agents" class="max-lg:w-full max-lg:flex max-lg:justify-center relative group" @click="isMenuShow = !isMenuShow">
                    <span class="max-lg:w-full max-lg:text-center max-lg:py-3 max-lg:px-4">Оружие</span>
                    <span class="max-lg:hidden absolute link_bg rounded-full w-full h-2 left-0 md:-top-[54px] xl:-top-[68px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                </NuxtLink>
            </div>
            <button @click="isMenuShow = !isMenuShow" class="flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100 cursor-pointer lg:hidden max-lg:z-40" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 open_menu rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
                <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 open_menu rounded-[1px] transition-opacity ease-linear duration-300"></span>
                <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 open_menu rounded-[1px] origin-[0] transition-transform ease-linear duration-300"></span>
            </button>     
            <div class="bg-[#00000099] opacity-50 absolute inset-0 min-h-screen max-lg:z-20 top-0 lg:hidden" :class="{'hidden' : !isMenuShow}"></div>           
        </div>
    </header>
</template>

<script setup>
    import { useHeader } from '~/stores/header'
    const isMenuShow = ref(false)

    const height = ref()
    onMounted(() => {
        const header = useHeader()
        header.height = height.value.clientHeight
        window.addEventListener("resize", () => {
            header.height = height.value.clientHeight
        })
    })    
</script>

<style scoped>   
    .link_bg {
        background: #2CE8C2;
        filter: drop-shadow(0px 0px 21px rgba(44, 232, 194, 0.35));
    }
    .button {
        border: 1.5px solid #2EECC5;
        box-shadow: 0px 0px 38px 0px rgba(46, 236, 197, 0.20);
    }
    .open_menu {
        background: linear-gradient(140deg, #2EECC5 9.43%, #3A796D 94.27%);
        filter: drop-shadow(0px 0px 21px rgba(53, 166, 144, 0.50));
    }

    @media (max-width: 1023px) {
        .mobile_menu .router-link-active {
            background: linear-gradient(90deg, #30DBB8 -17.89%, #37A58F 24.63%, #398778 99.91%);
        }
    }
</style>
