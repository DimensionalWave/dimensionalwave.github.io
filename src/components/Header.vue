<script setup lang="ts">
import { ref } from 'vue';
import SocialIcons from './partials/SocialIcons.vue';
import NavLink from './partials/NavLink.vue';
import AppBrand from './partials/AppBrand.vue';

const isOpen = ref(false);
const links = [
    { label: 'Games', url: '#games', },
    { label: 'Meet the Team', url: '#team', },
    { label: 'Get in Touch', url: '#contact', },
];

function toggleNavBar() {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="z-20 fixed top-0 w-full text-white bg-slate-900/60 shadow">
        <div class="h-16 flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div class="flex flex-row  items-center justify-between h-full">
                <a href="#home">
                    <AppBrand class="h-10" />
                </a>
                <button class="rounded hover:bg-primary-300 hover:text-primary-950 p-2 md:hidden focus:outline-none focus:shadow-outline" @click="toggleNavBar">
                    <i v-show="!isOpen" class="fa-solid fa-fw fa-bars"></i>
                    <i v-show="isOpen" class="fa-solid fa-fw fa-times"></i>
                </button>
            </div>
            <nav class="h-full flex-col flex-grow hidden pb-4 md:ml-8 md:pb-0 md:flex md:items-center md:justify-end md:flex-row gap-4">
                <NavLink v-for="link in links" :label="link.label" :url="link.url" class="h-full flex items-center px-2" />
                <SocialIcons class="text-primary-300 text-2xl" />
            </nav>
        </div>
    </div>
    <!-- mobile menu -->
    <nav class="z-10 fixed top-16 md:hidden w-full shadow">
        <div class="absolute z-30 flex flex-col items-center justify-center w-full py-4 gap-2 text-center bg-slate-700/80"
            :class="{ block: isOpen, hidden: !isOpen }">
            <NavLink v-for="link in links" :label="link.label" :url="link.url" @click="toggleNavBar" class="w-full py-1 text-lg" />
            <SocialIcons class="mx-auto text-primary-300 text-xl" />
        </div>
    </nav>
</template>

<style scoped>

</style>
