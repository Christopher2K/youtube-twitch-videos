import { Config } from 'remotion'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

Config.Rendering.setImageFormat('jpeg')
Config.Output.setOverwriteOutput(true)
Config.Bundling.overrideWebpackConfig((config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [...(config.resolve?.plugins ?? []), new TsconfigPathsPlugin()],
    },
  }
})
