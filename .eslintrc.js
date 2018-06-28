module.exports = {
    root: true,

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },

    env: {
        browser: true,
        commonjs: true,
        es6: true
    },

    extends: [
        'eslint:recommended',
        'plugin:@cgroup/sfchecklist/checklist',
        'plugin:@cgroup/sfchecklist/enhance'
    ],

    plugins: [
        // required to lint *.vue files
        //'html',
        '@cgroup/sfchecklist'
    ],

    globals: {
        _: true,
        process: true,
        VMP: true
    },

    rules: {
        '@cgroup/sfchecklist/filename-style': 'off',
        '@cgroup/sfchecklist/filename-no-uppercase': 'off',
        '@cgroup/sfchecklist/require-jsdoc': 'off',
    //     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    //     'sfchecklist/jsx-uses-vars': ['error', {
    //         defaultUsedVariables: ['h']
    //     }],

    //     'sfchecklist/max-coupling': ['error', {
    //         maxFanOut: 5
    //     }],

    //     'sfchecklist/no-use-this': ['error', {
    //         'onlyNestFunctionScope': false
    //     }]
        indent: 'off',
        'no-magic-numbers': 'off'
    }
};
