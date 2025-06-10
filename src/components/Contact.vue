<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
</script>

<template>
    <div>
        <SectionTitle :number="3" title="Contact Us" subtitle="Lets chat" />
        <div class="font-text text-center text-white bg-slate-900/60 hover:bg-slate-800/60 shadow px-4 py-8 mt-12">
            <p>
                For press enquiries, please contact <a href="mailto:press@dimensionalwave.com?subject=Press Enquiry" title="Press Email" class="underline text-primary-500 hover:text-primary-300">press@dimensionalwave.com</a>
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
