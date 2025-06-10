import { createApp } from 'vue';
import './sass/app.scss';
import PrimeVue from 'primevue/config';
import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import App from './App.vue';

const AppTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#eff9ff',
            100: '#def3ff',
            200: '#b6e9ff',
            300: '#76d8ff',
            400: '#2dc5ff',
            500: '#02aff5',
            600: '#008bd2',
            700: '#0070aa',
            800: '#005c89',
            900: '#074d73',
            950: '#04324d',
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.800}',
                    inverseColor: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '{primary.800}',
                    inverseColor: '#ffffff',
                },
            }
        },
    }
});

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: AppTheme,
            options: {
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities, theme'
                }
            }
        }
    })
    .mount('#app')
