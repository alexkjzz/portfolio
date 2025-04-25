import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'react/no-unescaped-entities': 'off', // Désactiver la règle sur les entités non échappées
      '@next/next/no-img-element': 'off',   // Désactiver le warning pour <img>
      '@typescript-eslint/no-unused-vars': 'off', // Désactiver le warning pour les variables inutilisées
    },
  },
];

export default eslintConfig;
