import fs from 'fs';
import path from 'path';
import Mocha, { MochaOptions } from 'mocha';
import { v4 } from 'uuid';
// https://github.com/mochajs/mocha/issues/995#issuecomment-359102213

const {
  EVENT_TEST_FAIL,
  EVENT_TEST_END,
} = Mocha.Runner.constants;

export default class MochaRunner {
  /**
   * @param {Object} options
   */
  _tmps: string[];
  _mocha: Mocha;
  testResult:string;
  expectedTestTitle: string;
  constructor(expectedTestTitle:string, options: MochaOptions = {}) {
    this._tmps = [];
    this._mocha = new Mocha(options);
    this.expectedTestTitle = expectedTestTitle;
    this.testResult = 'timeout';
  }

  /**
   * Run tests
   * @param {Array} tests
   * @returns {Promise}
   */
  async execute(tests:string[]): Promise<this> {
    await new Promise((resolve, _reject) => {
      tests.forEach((test:string) => {
        const testDir = path.dirname(test);
        
        const tmpTest = path.join(testDir, `${v4()}.test.ts`);
        
        fs.writeFileSync(tmpTest, fs.readFileSync(test));
        this._tmps.push(tmpTest);
        this._mocha.addFile(tmpTest);
      });

      this._mocha
        .run(() => resolve(this))
        .on(EVENT_TEST_END, (test) => {
          if (test.title === this.expectedTestTitle) {
            // console.log(test);
            this.testResult = test.state || 'x';
          }
        })
        .on(EVENT_TEST_FAIL, (test, error) => {
          if (test.title === this.expectedTestTitle) {
            this.testResult = test.state || 'x';
          }
        })
    });
    this.cleanup();
    return this;
  }

  /**
   * Get mocha instance
   * @returns {Mocha}
   */
  getMocha() {
    return this._mocha;
  }

  /**
   * Remove tmp test files
   * @returns {Promise}
   */
  cleanup() {    
    this._tmps.forEach((tmpTest) => {
      fs.unlinkSync(tmpTest);
    });
  }
}
