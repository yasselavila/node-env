yag-env
=====

Version 0.0.1, Copyright (c) 2016, [Yassel Avila Gil](http://yasselavila.com)

## What is this?

Prepares the data defined via 'process.env' to be used in web applications or node packages.

## License

[BSD 3 Clause](./LICENSE.txt)

## Documentation

### Environment definition

You can define the environment in the following ways:

- Production (default):
    * Defining **NODE_ENV** or **ENV**: ```NODE_ENV=production``` or ```ENV=prod```
    * Using flags ```PRODUCTION=true```, ```PRODUCTION=yes``` or ```PROD=1```

- Staging:
    * Defining **NODE_ENV** or **ENV**: ```NODE_ENV=staging``` or ```ENV=stg```
    * Using flags ```STAGING=true```, ```STAGING=yes``` or ```STG=1```

- Testing:
    * Defining **NODE_ENV** or **ENV**: ```NODE_ENV=testing``` or ```ENV=stg```
    * Using flags ```TESTING=true```, ```TESTING=yes``` or ```TEST=1```

- Development:
    * Defining **NODE_ENV** or **ENV**: ```NODE_ENV=development``` or ```ENV=dev```
    * Using flags ```DEVELOPMENT=true```, ```DEVEL=yes``` or ```DEV=1```

### Example

The following will define the development environment and will export some extra variables:

```
NODE_ENV=development ONE=1 TWO=2 OTHER=other EXPORTS=ONE,TWO node node-test.js
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
console.log(env.exported); // {ONE, TWO}
```

TypeScript:
```js
import {default as env} from 'yag-env';

console.log(env.ENV); // 'development'
console.log(env.isProduction); // FALSE
console.log(env.isStaging); // FALSE
console.log(env.isTesting); // FALSE
console.log(env.isDevelopment); // TRUE
console.log(env.exported); // {ONE, TWO}
```
