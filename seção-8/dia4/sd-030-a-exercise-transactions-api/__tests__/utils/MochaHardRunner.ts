import fs from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';

const execute = promisify(exec);

let newOriginalPath = '';

function hardMock(originalFilePath: string, mockFilePath: string) {
  newOriginalPath = (`${originalFilePath}.original`);
  fs.renameSync(originalFilePath, newOriginalPath);
  fs.writeFileSync(originalFilePath, fs.readFileSync(mockFilePath))
}

function unMock(originalFile: string) {
  fs.rmSync(originalFile);
  fs.renameSync(newOriginalPath, originalFile);
}

export async function runHardMockTests(originalFile: string, mockFile: string, testType: 'integration' | 'unit' = 'integration') {
  hardMock(originalFile, mockFile);
  const { stdout } = await execute(`npx mocha --reporter json -r ts-node/register tests/${testType}/**/*.test.ts --exit -t 60000 --exit`).catch((error) => error);
  unMock(originalFile);
  return JSON.parse(stdout);
}

export async function runHardTests(testType: 'integration' | 'unit' = 'integration') {
  const { stdout } = await execute(`npx mocha --reporter json -r ts-node/register tests/${testType}/**/*.test.ts --exit -t 60000 --exit`).catch((error) => error);
  return JSON.parse(stdout);
}
