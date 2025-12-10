const columns = process.stdout.columns;
const rows = process.stdout.rows;

const randomChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

setInterval(() => {
  let line = "";
  for (let i = 0; i < columns; i++) {
    line += "\x1b[32m" + randomChar() + "\x1b[0m";
  }
  console.log(line);
}, 50);
