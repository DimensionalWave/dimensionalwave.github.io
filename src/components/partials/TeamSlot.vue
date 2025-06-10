<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <div class="group bg-slate-900/60 hover:bg-slate-800/60 shadow w-full relative">
        <div class="bg-slate-600 flex justify-center items-center max-w-full w-full">
            <img :src="imageUrl" :alt="name" class="w-full" loading="lazy" />
        </div>
        <div class="absolute bottom-0 z-10 p-2 bg-slate-900/60 group-hover:bg-slate-800/80 w-full">
            <h3 class="text-md sm:text-lg md:text-xl text-primary-500 font-bold">{{ name }}</h3>
            <h4 class="text-primary-300 text-sm italic mt-0.5">{{ role }}</h4>
        </div>
    </div>
</template>

<style scoped>

</style>
