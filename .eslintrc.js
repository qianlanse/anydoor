module.exports = {
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "env": {
        "mocha": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        'semi': ['error', 'never'],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        'no-extra-semi': 'error',
    }
};