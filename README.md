# unbuild-broken-tsx

- [main](https://github.com/jrson83/unbuild-broken-tsx/tree/main) branch - unbuild `0.9.0` is broken when using `.tsx`
- [unbuild@0.8.11](https://github.com/jrson83/unbuild-broken-tsx/tree/unbuild@0.8.11) branch - unbuild `0.8.11` is working when using `.tsx`
- [unbuild@0.9.0-fix](https://github.com/jrson83/unbuild-broken-tsx/tree/unbuild@0.9.0-fix) branch - unbuild `0.9.0` is working when using `.tsx`

## Usage

Install and run build on **broken 0.9.0** example:

```bash
git clone https://github.com/jrson83/unbuild-broken-tsx.git
cd unbuild-broken-tsx
npm install
npm run build
```

Install and run build on **working 0.8.11** example:

```bash
git clone -b unbuild@0.8.11 https://github.com/jrson83/unbuild-broken-tsx.git
cd unbuild-broken-tsx
npm install
npm run build
```

Install and run build on **fixed 0.9.0** example:

```bash
git clone -b unbuild@0.9.0-fix https://github.com/jrson83/unbuild-broken-tsx.git
cd unbuild-broken-tsx
npm install
npm run build
```

## Update on possible fix

```bash
npm i -D @rollup/plugin-typescript tslib
```

Update `build.config.ts`:

```ts
import { defineBuildConfig } from 'unbuild'
import tsPlugin from '@rollup/plugin-typescript'

export default defineBuildConfig({
  entries: ['src/index'],
  externals: ['react', 'react-dom'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
  },
  hooks: {
    'rollup:options': (ctx, options) => {
      if (!Array.isArray(options.plugins)) {
        options.plugins = options.plugins ? [options.plugins] : []
      }
      options.plugins.push(tsPlugin())
    },
  },
})
```
