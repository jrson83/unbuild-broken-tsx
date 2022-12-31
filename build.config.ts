import { defineBuildConfig } from 'unbuild'

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
})
