import globals from "globals"
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';

export default [ {
    ignores: [
        'package-lock.json',
        'dist/**/*',
    ],
},  {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },
    },
}, {
    files: ['src/**/*.js'],
    plugins: {
        tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
        ...eslintPluginTailwindCSS.configs.recommended.rules,
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/no-custom-classname': 'error',
    },
}]