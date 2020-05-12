const path = require("path");

module.exports = (app, io) => {
  require("./io/io.js")(io);
  require("./youtube/youtube.js")(app);
  require("./spotify/spotify.js")(app);
  require("./api/api.js")(app);

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/build/index.html"));
  });
};
