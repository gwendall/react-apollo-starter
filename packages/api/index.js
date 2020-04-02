require("babel-register");
require("dotenv").config();
require("./src/server");

process.on("SIGINT", () => {
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});
