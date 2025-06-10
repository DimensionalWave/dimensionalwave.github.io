<script setup lang="ts">
import SocialIcons from './partials/SocialIcons.vue';
import AppBrand from './partials/AppBrand.vue';
</script>

<template>
    <footer class="bg-slate-900/40 text-center text-slate-400 p-8 space-y-4 font-text">
        <div>
            <AppBrand class="h-10" />
        </div>
        <div class="text-sm">
            <p>
                © {{ new Date().getFullYear() }} Dimensional Wave Limited.
            </p>
        </div>
        <div class="text-2xl">
            <SocialIcons />
        </div>
        <div class="text-xs space-y-0.5">
            <p>
                Dimensional Wave Limited, Company Number 08031338
            </p>
        </div>
    </footer>
</template>

<style scoped>

</style>
