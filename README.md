yag-env
=====

Version 0.0.1, Copyright (c) 2016, [Yassel Avila Gil](http://yasselavila.com)

## What is this?

Prepares the data defined via 'process.env' to be used in web applications or node packages.

## License

[BSD 3 Clause](./LICENSE.txt)

## Documentation

### Environment definition

You can define the environment name using **NODE_ENV** or **ENV**:

- Production (default): `NODE_ENV=production` or `ENV=prod`
- Staging: `NODE_ENV=staging` or `ENV=staging`
- Testing: `NODE_ENV=testing` or `ENV=test`
- Development: `NODE_ENV=development` or `ENV=dev`

#### Using flags

Also is possible the usage of boolean flags. Each ENV has several flag names that can
be used with either of the following values: `true`, `yes` or `1`. For example:

- Production (`PRODUCTION`|`PROD`): `PRODUCTION=true`, `PRODUCTION=yes` or `PROD=1`
- Staging (`STAGING`): `STAGING=true`, `STAGING=yes` or `STAGING=1`
- Testing (`TESTING`|`TEST`): `TESTING=true`, `TESTING=yes` or `TEST=1`
- Development (`DEVELOPMENT`|`DEVEL`|`DEV`): `DEVELOPMENT=true`, `DEVEL=yes` or `DEV=1`

### Example

The following sets the development environment and will export some extra variables:

```sh
NODE_ENV=development ONE=1 TWO=2 OTHER=other EXPORTS=ONE,TWO node node-test.js
```

Using flags:

```sh
PROD=1 ONE=1 TWO=2 OTHER=other EXPORTS=ONE,OTHER node node-test.js
```

### API

JavaScript:
```js
var env = require('yag-env');

console.log(env.ENV); // 'development'
console.log(env.isProduction); // FALSE
console.log(env.isStaging); // FALSE
console.log(env.isTesting); // FALSE
console.log(env.isDevelopment); // TRUE
console.log(env.data); // {ONE, TWO}
```

TypeScript:
```ts
import * as env from 'yag-env';

console.log(env.ENV); // 'development'
console.log(env.isProduction); // FALSE
console.log(env.isStaging); // FALSE
console.log(env.isTesting); // FALSE
console.log(env.isDevelopment); // TRUE
console.log(env.data); // {ONE, TWO}
```

### Bundlers

This package will only work on Node.js. To use it on bundlers, you must replace
the reference to `process.env` using third-party plugins:

#### Webpack

With Webpack you can use the Define plugin to replace `process.env`:

```js
var DefinePlugin = require('webpack/lib/DefinePlugin');
var env = require('yag-env/bundling');

module.exports = {
  // ...
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(env)
    })
  ]
  // ...
};
```

_**IMPORTANT**: On other build-tools you must use something similar_
