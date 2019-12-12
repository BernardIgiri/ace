const merge = require('webpack-merge')
const { retrieveClientConfig } = require('../webpack.config')

module.exports = ({ config, mode }) => {
  return merge.smart(
    config,
    retrieveClientConfig({
      stats: 'errors-only',
      env: 'storybook',
      packageJson: process.__STORYBOOK_OPTIONS__.packageJson,
    })
  )
}
