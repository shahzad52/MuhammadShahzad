const { spawn } = require('child_process');
const fs = require('fs');

const log = fs.createWriteStream('astro-server.log', { flags: 'w' });

const child = spawn('npx', ['astro', 'dev', '--port', '3000', '--host'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  detached: true,
  cwd: __dirname
});

child.stdout.pipe(log);
child.stderr.pipe(log);

child.on('exit', (code, signal) => {
  log.write(`\nChild process exited with code ${code} and signal ${signal}\n`);
});

child.unref();
console.log('Spawned Astro dev server with PID:', child.pid);
process.exit(0);
