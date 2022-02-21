// helper module to create file with the generated layout
// import dependencies
const fs = require("fs");
const path = require("path");

// create HTML file with the data
const createFile = (data) => {
  const root = path.resolve(__dirname, "../");
  const dist = path.resolve(__dirname, "../dist");
  // check if the directory exists, if note create one
  if (!fs.existsSync(dist)) {
    console.info(
      "The path doesn't already exist, so creating the dist directory"
    );
    fs.mkdir(`${root}/dist`, (err) => {
      if (err) throw err;
    });
  }
  // create file with the data supplied
  fs.writeFile(`${dist}/roster.html`, data, (err) => {
    if (err) throw err;
  });
};

module.exports = createFile;
