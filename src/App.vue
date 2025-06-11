<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Section from './components/partials/Section.vue';
import Hero from './components/Hero.vue';
import Games from './components/Games.vue';
import Team from './components/Team.vue';
import Contact from './components/Contact.vue';
</script>

<template>
    <Header />
    <main class="mt-16 w-full">
        <Section id="home" v-slot="slotProps">
            <Hero :class="slotProps.class" />
        </Section>
        <Section id="games" v-slot="slotProps">
            <Games :class="slotProps.class" />
        </Section>
        <Section id="team" v-slot="slotProps">
            <Team :class="slotProps.class" />
        </Section>
        <Section id="contact" v-slot="slotProps">
            <Contact :class="slotProps.class" />
        </Section>
    </main>
    <Footer />
</template>

<style scoped>

</style>
