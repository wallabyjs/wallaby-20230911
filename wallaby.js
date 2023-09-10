module.exports = function (wallaby) {
  return {
    files: [
      "src/project-legacy/**/*",
      "!src/project-legacy/test/data/request-payloads/**",
      "!src/project-legacy/test/**/*_test.*",
    ],
    tests: [
      // just a single test for the sake of debug
      "./src/project-legacy/test/controllers/white_label_controller_test.js",
    ],
    testFramework: "mocha",
    setup(w) {
      const path = require("path");
      const moduleAlias = require("module-alias");

      moduleAlias.addPath(path.join(w.localProjectDir, "project-legacy"));
      moduleAlias(path.join(w.localProjectDir, "package.json"));
    },
    env: {
      type: "node",
    },
  };
};
