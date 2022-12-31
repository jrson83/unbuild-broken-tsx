# unbuild-broken-tsx

- [main](https://github.com/jrson83/unbuild-broken-tsx/tree/main) branch - unbuild `9.0.0` is broken when using `.tsx`
- [unbuild@0.8.11](https://github.com/jrson83/unbuild-broken-tsx/tree/unbuild@0.8.11) branch - unbuild `0.8.11` is working when using `.tsx`

## Usage

Install and run build on **broken** example:

```bash
git clone https://github.com/jrson83/unbuild-broken-tsx.git
cd unbuild-broken-tsx
npm install
npm run build
```

Install and run build on **working** example:

```bash
git clone -b unbuild@0.8.11 https://github.com/jrson83/unbuild-broken-tsx.git
cd unbuild-broken-tsx
npm install
npm run build
```

## Error

```bash
❯ npm run build

> unbuild-broken-tsx@0.0.0 build
> unbuild

i Building unbuild-broken-tsx                                                                                                                                             02:28:10
Error building C:/unbuild-broken-tsx: SyntaxError: Unexpected token (4:27) in C:\unbuild-broken-tsx\src\index.tsx
SyntaxError: Unexpected token (4:27) in C:\unbuild-broken-tsx\src\index.tsx
    at pp$4.raise (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:20213:13)
    at pp$9.unexpected (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17514:8)
    at pp$5.parseExprAtom (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19597:10)
    at pp$5.parseExprSubscripts (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19389:19)
    at pp$5.parseMaybeUnary (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19355:17)
    at pp$5.parseExprOps (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19282:19)
    at pp$5.parseMaybeConditional (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19265:19)
    at pp$5.parseMaybeAssign (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:19232:19)
    at pp$8.parseVar (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:18057:24)
    at pp$8.parseVarStatement (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17921:8)
    at pp$8.parseStatement (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17669:17)
    at Parser.parseExport (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:24092:33)
    at pp$8.parseStatement (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17690:74)
    at pp$8.parseTopLevel (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17571:21)
    at Parser.parse (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17343:15)
    at Function.parse (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:17393:35)
    at Graph.contextParse (file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:23773:38)
    at tryParse (file:///C:/unbuild-broken-tsx/node_modules/@rollup/plugin-commonjs/dist/es/index.js:17:12)
    at analyzeTopLevelStatements (file:///C:/unbuild-broken-tsx/node_modules/@rollup/plugin-commonjs/dist/es/index.js:36:15)
    at Object.transformAndCheckExports (file:///C:/unbuild-broken-tsx/node_modules/@rollup/plugin-commonjs/dist/es/index.js:2033:68)
    at Object.transform (file:///C:/unbuild-broken-tsx/node_modules/@rollup/plugin-commonjs/dist/es/index.js:2229:41)
    at file:///C:/unbuild-broken-tsx/node_modules/rollup/dist/es/shared/rollup.js:23563:40 {
  pos: 119,
  loc: {
    column: 27,
    file: 'C:\\unbuild-broken-tsx\\src\\index.tsx',
    line: 4
  },
  raisedAt: 120,
  frame: "2: import { createRoot } from 'react-dom/client'\n" +
    '3: \n' +
    '4: export const createStory = <P extends object>(\n' +
    '                              ^\n' +
    '5:   Component: ComponentType<P>,\n' +
    '6:   props: P',
  id: 'C:\\unbuild-broken-tsx\\src\\index.tsx',
  hook: 'resolveId',
  code: 'PLUGIN_ERROR',
  plugin: 'commonjs--resolver',
  watchFiles: [ 'C:\\unbuild-broken-tsx\\src\\index.tsx' ]
}
```
