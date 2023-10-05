const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDirectory, fileName);

  fs.writeFileSync(filePath, `This is log file ${i}`);

  console.log(fileName);
}