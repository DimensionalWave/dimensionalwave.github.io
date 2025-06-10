<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import TeamSlot from './partials/TeamSlot.vue';

const teamMembers = [
    { name: 'Daniel McAssey', role: 'Lead Developer', imageUrl: new URL('/src/assets/team/daniel_mcassey.jpg', import.meta.url).href },
    { name: 'Bunnycub', role: 'Lead Artist', imageUrl: new URL('/src/assets/team/bunnycub.jpg', import.meta.url).href },
    { name: 'Dan C', role: 'Lead Game Designer', imageUrl: new URL('/src/assets/team/dan_c.jpg', import.meta.url).href },
]
</script>

<template>
    <div>
        <SectionTitle :number="2" title="Meet the Team" subtitle="Our amazing & talented team" />
        <div class="grid grid-cols-6 gap-4 mt-12">
            <TeamSlot v-for="teamMember in teamMembers"
                           :name="teamMember.name"
                           :role="teamMember.role"
                           :image-url="teamMember.imageUrl"
                           class="col-span-3 sm:col-span-2" />
        </div>
    </div>
</template>

<style scoped>

</style>
