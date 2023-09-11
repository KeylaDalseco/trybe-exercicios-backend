const ts = require('typescript');
const path = require('path');

const FILES_FOLDER = path.join(__dirname, 'sources');

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

    if (errorDiagnostic) return {
      pass: false,
      message: () => `Expected ${fileName}.ts to compile successfully`,
    };

    if (emit) program.emit();

    return {
      pass: true,
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
});
