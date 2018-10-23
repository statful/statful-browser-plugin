module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        'jest/globals': true
    },
    globals: {
        PACKAGE_NAME: true,
        PACKAGE_VERSION: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
    plugins: ['jest']
};
