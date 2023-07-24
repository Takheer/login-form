module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'object-curly-spacing': ['error', 'always'],
        camelcase: 'warn',
        curly: ['error', 'all'],
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'EVENTS',
                'OTHER_ATTR',
                'CONTENT',
            ],
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 4,
            multiline: 1,
        }],
    }
}
