import path from 'path';
import { fileURLToPath } from 'url';
import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import importHelpers from "eslint-plugin-import-helpers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [  {
    files: ['src/**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsParser, 
      parserOptions: {
        project: path.join(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "import-helpers": importHelpers,
      "import": importPlugin
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "max-len": [
        "error",
        { "code": 120 }
      ],
      "quotes": [
        "error",
        "double"
      ],
      "comma-dangle": "off",
      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      "@typescript-eslint/comma-dangle": ["error", "never"],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/no-misused-promises": 0,
      "@typescript-eslint/no-floating-promises": 0,
      "@typescript-eslint/require-await": 0,
      "indent": "off",
      "no-extra-boolean-cast": 0,
      "no-trailing-spaces": 0,
      "object-curly-spacing": "off",
      "space-in-parens": ["error", "never"],
      "template-curly-spacing": [
        "error",
        "always"
      ],
      "newline-per-chained-call": [
        "error",
        { ignoreChainWithDepth: 2 }
      ],
      "one-var-declaration-per-line": [
        "error",
        "initializations"
      ],
      "object-property-newline": "error",
      "camelcase": "error",
      "jsx-quotes": [
        "error",
        "prefer-double"
      ],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-multi-spaces": "error",
      "brace-style": "error",
      "space-before-blocks": "error",
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true
        }
      ],
      "comma-spacing": [
        2,
        {
          before: false,
          after: true
        }
      ],
      "semi": [
        "error",
        "always"
      ],
      "dot-notation": "error",
      "no-undef": 0,
      "import/no-useless-path-segments": "error",
      "no-restricted-imports": "off",
      "import-helpers/order-imports": [
        "error",
        {
          "newlinesBetween": "always",
          "groups": [
            "module",
            "/^pages/",
            "/^components/",
            "/^data/"
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true
          }
        }
      ]
    }
  }
];
