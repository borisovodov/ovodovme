import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindcss from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Максимально строгие type-aware проверки TypeScript
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.strictTypeChecked,
	{
		files: ["**/*.config.mjs"],
		...tseslint.configs.disableTypeChecked,
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.config.mjs"],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		plugins: {
			tailwindcss,
		},
		settings: {
			tailwindcss: {
				// Tailwind v4 не имеет JS-конфига — берём тему из CSS
				cssConfigPath: "globals.css",
				cssFiles: ["**/*.css", "!**/node_modules/**"],
			},
		},
		rules: {
			"tailwindcss/classnames-order": "error",
			"tailwindcss/enforces-negative-arbitrary-values": "warn",
			"tailwindcss/enforces-shorthand": "warn",
			"tailwindcss/no-contradicting-classname": "error",
			"tailwindcss/no-custom-classname": "warn",
			"tailwindcss/no-unnecessary-arbitrary-value": "warn",
		},
	},
]);

export default eslintConfig;
