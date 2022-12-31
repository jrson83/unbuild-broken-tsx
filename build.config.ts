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
