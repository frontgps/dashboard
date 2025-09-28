module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {},
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "react/react-in-jsx-scope": "off", 
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};