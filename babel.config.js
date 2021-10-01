module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: [""],
        extensions: [".tsx", ".ts"],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
};
