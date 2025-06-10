import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import tailwindcssPrimeUi from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
                text: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                'font-cycle': {
                    '0%, 100%': { 'font-family': 'Space Grotesk' },
                    '20%': { 'font-family': 'Arial' },
                    '40%': { 'font-family': 'Nunito' },
                    '60%': { 'font-family': 'Times New Roman' },
                    '80%': { 'font-family': 'Garamond' },
                },
            },
            animation: {
                'font-cycle': 'font-cycle 2.5s linear infinite',
            },
        },
    },

    plugins: [forms, typography, containerQueries, tailwindcssPrimeUi],
};
