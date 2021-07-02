# monorepo-ts-vite-example

Monorepo example with typescript, vitejs and storybook to test behaviour with nested module dependencies.

Uses [pnpm](https://pnpm.io/) for package management.

## Requirements

[pnpm](https://pnpm.io/): install with `npm install -g pnpm`

## setup

`pnpm install`

## dev hints

- tsconfig.json: non-emitting settings (e.g. for support in IDE)
- tsconfig.build.json: emitting build config for esm module
- tsconfig.build-cjs.json: emitting build config for commonjs variant
- each ts package or app must be referenced in root/tsconfig.json -> "references"
- each component package should have a single entrypoint in src/index.ts
- packages should reference their direct dependencies in their tsconfig.json by tsconfig.build.json of the referenced package
- storybook app: vitejs config goes to .storybook/main.js -> viteFinal, no vitejs.config.ts required

storybook (with vite) requires `shamefully-hoist=true` in .npmrc for now :(

css in single sass package is inspired by the way how @adobe/react-spectrum handles it ;)