import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackBar from 'webpackbar';

const buildMode = process.argv[3] === 'production' ? 'production' : 'development';

const systemFolderName = "CoCDarkAges";
const systemFolderPath = "C:\\Users\\prusz\\AppData\\Local\\FoundryVTT\\Data\\systems";

export default {
  bail: buildMode === 'production',
  entry: "./module/cocDarkAges.js",
  output: {
    path: path.join(systemFolderPath, systemFolderName),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'lang/', to: 'lang/' },
        { from: 'README.md' },
        { from: 'system.json' },
        { from: 'template.json' },
      ]
    }),
    new WebpackBar({})
  ],
  mode: buildMode,
  watch: buildMode === 'development'
};
