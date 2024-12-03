module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/protasker"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
