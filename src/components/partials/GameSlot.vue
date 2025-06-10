<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <div class="bg-slate-900/60 hover:bg-slate-800/60 shadow flex flex-nowrap">
        <div class="bg-slate-600 flex justify-center items-center min-w-32 w-32">
            <img :src="imageUrl" :alt="name" class="w-full" loading="lazy" />
        </div>
        <div class="p-4">
            <a v-if="url" :href="url" :title="name" target="_blank" class="underline text-xl text-primary font-bold hover:text-primary-300"><h3>{{ name }}</h3></a>
            <h3 class="text-xl text-primary-500 font-bold hover:text-primary-600">{{ name }}</h3>
            <h4 class="text-primary-300 italic mt-0.5">{{ status }}</h4>
            <p class="mt-2 font-text text-white text-sm">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
