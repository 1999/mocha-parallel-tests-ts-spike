#!/usr/bin/env node

import { execFile } from 'child_process';
import { resolve } from 'path';

const mochaExecPath = resolve(`${__dirname}/../../node_modules/.bin/mocha`);

execFile(mochaExecPath, process.argv.slice(2), {
  cwd: process.cwd(),
  env: process.env,
}, (error: Error | null, stdout: string, stderr: string) => {
  // tslint:disable
  console.log(stdout);

  if (error) {
    console.log(stderr);
    process.exit((error as any).code);
  }
});

// spawnSync(mochaExecPath);
