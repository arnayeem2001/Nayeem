The TypeScript compiler run with the tsc command ,checks the code and produce JavaScript.When run tsc, the compiler reads the TypeScript files and checks their syntax.
Example:
let a=20
a='twenty'
Here should be a type error.if code passes ,TypeScript remove type notations.

The tsconfig.json file tells the compiler how aproject should be built.it can specify which file to include , where to put the compiled JavaScript.

Terminal input:
tsc –init
Output:
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "esnext",
    "target": "esnext",
    "types": [],
    "strict": true,
    "skipLibCheck": true,
  }
}