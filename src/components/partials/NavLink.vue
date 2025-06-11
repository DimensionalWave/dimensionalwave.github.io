<script setup lang="ts">

defineProps({
    label: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <a class="text-white font-text font-bold transition duration-200 hover:text-primary-950 hover:bg-primary-300/50 hover:ease-in-out focus:text-primary-200 motion-reduce:transition-none lg:px-2"
       :href="url"
       :title="label">{{ label }}</a>
</template>

<style scoped>

</style>
