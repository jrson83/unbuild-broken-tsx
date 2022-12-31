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

## No Error

```bash
❯ npm run build

> unbuild-broken-tsx@0.0.0 build
> unbuild

i Building unbuild-broken-tsx                                                                                                                                             02:31:04
"ComponentType" is imported from external module "react" but never used in "src/index.tsx".
√ Build succeeded for unbuild-broken-tsx                                                                                                                                  02:31:05
  dist/index.cjs (size: 588 B, exports: createStory)                                                                                                                      02:31:05
  dist/index.mjs (size: 301 B, exports: createStory)                                                                                                                      02:31:05
Σ Total dist size (byte size): 1.07 kB
```
