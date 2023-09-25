const ts = require('typescript');
const path = require('path');
const fs = require('fs');

const FILES_FOLDER = path.join(__dirname, 'sources');

const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

const tsConfig = {
  maxNodeModuleJsDepth: 1,
  target: ts.ScriptTarget.ES2016,
  module: ts.ModuleKind.CommonJS,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  skipLibCheck: true,
  outDir: path.join(__dirname, '..', 'dist'),
}

expect.extend({
  toCompile(fileName, emit = true) {
    const filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], tsConfig);
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (!errorDiagnostic) {
      if (emit) program.emit();

      return {
        pass: true,
        message: () => `Expected ${fileName}.ts to compile successfully`,
      };
    }

    if (errorDiagnostic.code === 2307) return {
      pass: false,
      message: () => errorDiagnostic.messageText,
    };

    return {
      pass: false,
      message: () => `Expected ${fileName}.ts to compile successfully`,
    };
    
  },
  notToCompile(fileName) {
    const filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], tsConfig);
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (!errorDiagnostic) return {
      pass: false,
      message: () => `Expected ${fileName}.ts to generate compile errors`,
    };

    if (errorDiagnostic.code === 6053) return {
      pass: false,
      message: () => `${filePath} is not a valid file. Your test is probably not testing the correct file.`,
    };

    if (errorDiagnostic.code === 2307) return {
      pass: false,
      message: () => errorDiagnostic.messageText,
    };

    return {
      pass: true,
      message: () => `Expected ${fileName}.ts to generate compile errors`,
    };
  },
  toCompileAndBeEqualTo(fileName, expected) {
    let filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], tsConfig);

    program.emit();
    
    const compiledFile = path.join(__dirname, '..', 'dist', 'tests', 'sources', `${fileName}.js`);
    const jsString = fs.readFileSync(compiledFile) + ' ; result();';
    const result = eval(replaceAll(jsString, '../../src', '../src'));

    const pass = typeof result === 'object' ? JSON.stringify(result) == JSON.stringify(expected)  : result === expected;

    return pass ? {
      pass: true,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected}`,
    } : {
      pass: false,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected} but got ${typeof result === 'object' ? JSON.stringify(result) : result}`,
    };
  },
});
