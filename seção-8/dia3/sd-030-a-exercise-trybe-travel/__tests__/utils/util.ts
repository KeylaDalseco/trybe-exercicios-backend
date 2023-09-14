import { promisify } from 'util';
import { exec } from 'child_process';

import constants from '../config/constants';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const execPromise = promisify(exec);

type Executable = {
  command: string,
  validate: string,
  include: string,
  rounds?: number,
  log?: boolean,
  customDelay?: number,
  message?: string,
  exitDelay?: boolean,
}

const condExec = async (details: Executable) => {
  let isValid = false;
  let current = 1;
  let report;

  const {
    command,
    validate,
    include,
    rounds = constants.defaultRounds,
    log = process.env.DEBUG === "true",
    customDelay = constants.defaultDelay,
    message,
    exitDelay = false
  } = details;

  if(command) {
    await execPromise(command).catch(() => true);
  }

  while(!isValid) {
    if(message){
      console.warn(message);
    }

    if(current >= rounds) {
      throw new Error(`Não foi possível executar a função com os parâmetros: ${JSON.stringify(report, null, '\t')}`);
    }

    await delay(customDelay);

    const { stdout, stderr } = await execPromise(validate)
      .catch(({ stdout, stderr }) => ({ stdout, stderr }));

    isValid = !!stdout.includes(include) || !!stderr.includes(include);

    report = {
      date: new Date().toISOString(),
      isValid,
      current,
      rounds,
      command,
      validate,
      include,
      stdout,
      stderr
    };

    if(log) {
      console.warn(report);
    }

    current += constants.numbers.one;
  }

  if(exitDelay !== false){
    await delay(Number(exitDelay));
  }

  return report;
}

export {
  condExec,
};
