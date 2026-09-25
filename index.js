const app = require("./src/app");
const config = require("./src/config/config");
const port = config?.app.port;

// listening app
app.listen(port, () => {
  console.log(
    `Server is running successfully on port http://localhost:${port}`,
  );
});
