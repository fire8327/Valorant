<template>
    <div class="font-Source-Code font-bold grid grid-cols-3 gap-10">
        <!-- ГЛАВНАЯ СТРАНИЦА ДЛЯ КАРТЫ, ГДЕ БУДУТ ВЫВОДИТЬСЯ РАЗНЫЕ КАРТЫ КРУТЫЕ
        <NuxtLink to="/maps/3">РЕЙНА</NuxtLink> -->
        <ul>
            <li v-for="item in maps.data">
                <NuxtLink :to="`/maps/map-${item.uuid}`">{{  item.displayName }}</NuxtLink> 
            </li>
        </ul>
        <!-- <pre>
            {{  maps.data }}
        </pre> -->
    </div>  
</template>

<script setup>
        const { data: maps } = await useFetch(`https://valorant-api.com/v1/maps`)
    
</script>