const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
  const files = fs.readdirSync(logsDirectory);

  files.forEach((file) => {
    const filePath = path.join(logsDirectory, file);
    console.log("delete files..." + path.basename(filePath));
    fs.unlinkSync(filePath);
  });

  fs.rmdirSync(logsDirectory);
} else {
  console.log("Logs directory does not exist.");
}