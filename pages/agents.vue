<template>
    <pre>
        {{ agents }}
    </pre>
</template>

<script setup>
    const { data: agents, error: agentsError } = await useFetch(`https://valorant-api.com/v1/agents?language=ru-RU`)
</script>
