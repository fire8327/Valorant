<template>
    <Header/>
    <main class="grid-container gap-y-8 py-8 xl:gap-y-12 xl:py-12 font-semibold">
        <NuxtPage/>
    </main>
    <Footer/>
</template>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>