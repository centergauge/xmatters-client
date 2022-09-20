import { typescript } from 'projen';
import { javascript } from 'projen';
  
const compilerOptions: javascript.TypeScriptCompilerOptions = {
    alwaysStrict: true,
    declaration: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    inlineSourceMap: true,
    inlineSources: true,
    lib: [
      "es2019"
    ],
    module: "CommonJS",
    noEmitOnError: false,
    noFallthroughCasesInSwitch: true,
    noImplicitAny: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    resolveJsonModule: true,
    strict: true,
    strictNullChecks: true,
    strictPropertyInitialization: true,
    stripInternal: true,
    target: "ES2019"
}

const configOptions: javascript.TypescriptConfigOptions = {
  compilerOptions: compilerOptions,
}

const projectOptions: typescript.TypeScriptProjectOptions = {
  defaultReleaseBranch: 'main',
  name: 'ts-projen-src2',
  projenrcTs: true,  
  eslint: false,
  tsconfig: configOptions
};
const project = new typescript.TypeScriptProject(projectOptions);

// let eo: javascript.EslintOptions = {
//   dirs: ['src'],

// }
// let eslint: javascript.Eslint = new javascript.Eslint(project, eo);
// // eslintOptions: eo,
// console.log(eslint)

project.synth();