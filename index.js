const express = require("express");

const { PORT } = require("./src/config");
const apiRoutes = require("./src/routes");
const app = express();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
