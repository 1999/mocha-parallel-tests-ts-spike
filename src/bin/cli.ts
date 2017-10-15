#!/usr/bin/env node

import * as assert from 'assert';
import { execFile } from 'child_process';
import { resolve } from 'path';
import * as yargs from 'yargs';
import binHelper from '../bin-helper';
const getOptions = require('mocha/bin/options');

const DEFAULT_PARALLEL_TYPE = 'async';

// support --opts
// getOptions() changes process.argv
getOptions();
const argv = yargs.parse(process.argv);

const parallelType = argv.parallel || DEFAULT_PARALLEL_TYPE;
assert(
  ['async', 'thread'].includes(parallelType),
  `--parallel type is not supported: ${parallelType}`,
);

binHelper(argv);

// const mochaExecPath = resolve(`${__dirname}/../../node_modules/.bin/mocha`);
// execFile(mochaExecPath, process.argv.slice(2), {
//   cwd: process.cwd(),
//   env: process.env,
// }, (error: Error | null, stdout: string, stderr: string) => {
//   // tslint:disable
//   console.log(stdout);

//   if (error) {
//     console.log(stderr);
//     process.exit((error as any).code);
//   }
// });
