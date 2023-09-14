/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './__tests__',

  testSequencer: './config/sequencer.js',
  testRegex: './*\\.test\\.ts$',
  testTimeout: 60000,
  maxWorkers: 1,
};
