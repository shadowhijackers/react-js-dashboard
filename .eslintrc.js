module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		"prettier/react",
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	'parser': 'babel-eslint',
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/prop-types": 0
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
