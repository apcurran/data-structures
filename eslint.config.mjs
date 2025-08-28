import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            js,
            "@stylistic": stylistic,
        },
        extends: ["js/recommended"],
        rules: {
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": "error",
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/brace-style": "error",
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/eol-last": ["error", "always"],
        },
    },
]);
