import { Config } from 'remotion'
import type { RuleSetRule } from 'webpack'
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
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []).map((rule) => {
          if (String((rule as RuleSetRule).test).includes('svg')) {
            return {
              ...(rule as RuleSetRule),
              test: /\.(png|jpg|jpeg|webp|gif|bmp|webm|mp4|mp3|m4a|wav|aac)$/,
            }
          }

          return rule
        }),
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  }
})
