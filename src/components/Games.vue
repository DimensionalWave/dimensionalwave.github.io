<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import GameSlot from './partials/GameSlot.vue';

const games = [
    { name: 'Unnamed', status: 'In-Development', url: undefined, imageUrl: new URL('/src/assets/games/unknown.png', import.meta.url).href, description: 'Unnamed 3D spy party game' },
    { name: 'Unnamed', status: 'In-Development', url: undefined, imageUrl: new URL('/src/assets/games/unknown.png', import.meta.url).href, description: 'Unnamed 2D espionage side-scroller' },
]
</script>

<template>
    <div>
        <SectionTitle :number="1" title="Games" subtitle="Released & Upcoming Games" />
        <div class="grid grid-cols-6 gap-6 mt-12">
            <GameSlot v-for="game in games"
                           :name="game.name"
                           :status="game.status"
                           :description="game.description"
                           :image-url="game.imageUrl"
                           :url="game.url"
                           class="col-span-6" />
        </div>
    </div>
</template>

<style scoped>

</style>
