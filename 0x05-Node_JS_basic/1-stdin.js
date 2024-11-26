process.stdout.write('Welcome to Holbeton School, what is your name?\n');
process.stdin.on('data', (data) => {
  console.log(`Your name is ${data.toString().trim()}`);
  process.stdout.write('This important software is now closing\n');

  process.stdin.pause();
});
