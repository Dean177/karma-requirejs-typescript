declare module "example/exampleFunc" {
    import imp = require('typescript/example/exampleFunc'); // this behaves like a relative path, but tsc eats it as 'not relative'.
    export = imp;
}