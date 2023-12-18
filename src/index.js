const express = require("express");

const { ServerConfig, Logger, EmailConfig } = require("./config");

const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, async () => {
  console.log(`Server started at PORT: ${ServerConfig.PORT}`);
  Logger.info("Server up and running.");
  const response = await EmailConfig.sendMail({
    to: "mdareebansar@gmail.com",
    subject: "Test",
    text: "Feedback",
  });
  console.log(response);
});
