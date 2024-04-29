process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input) {
    console.log(`Your name is: ${input}`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
