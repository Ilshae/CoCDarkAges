import path from 'path';

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
  mode: buildMode,
  watch: buildMode === 'development'
};
