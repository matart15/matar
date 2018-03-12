module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "fetch": false,
    "document": false,
    "__DEV__": false
  },
  "plugins": [
    "flowtype",
    "jsx-a11y",
    "react",
    "prettier",
    "react-native"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "jest": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [
      2,
      "never"
    ],
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": 2,
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "react/no-string-refs": 0,
    "react/jsx-no-bind": 0,
    "react-native/no-unused-styles": 1,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "no-console": 0,
    "one-var": 0,
    "react/forbid-prop-types": 0,
    "import/no-named-as-default-member": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": [
      "setupJest.js",
      "App/Services/mock.js",
      "**/*.test.js",
      "**/*.stories.js"
    ]}],
    'camelcase': 0,
    "import/first": 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    "jsx-a11y/anchor-is-valid": 0,
    'jsx-a11y/href-no-hash': 0,
    "react/require-default-props": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 0,
    'import/extensions': ['error', 'never', {
      js: 'never',
      jsx: 'never',
    }],
    'prettier/prettier': ['error', {
      printWidth: 80,
      jsxBracketSameLine: true,
      singleQuote: true,
      semi: false
    }]
  },
	"settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
	}
};
