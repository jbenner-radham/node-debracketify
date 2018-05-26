debracketify
============
[![npm](https://img.shields.io/npm/v/debracketify.svg?)](https://www.npmjs.com/package/debracketify)
[![build](https://img.shields.io/travis/jbenner-radham/node-debracketify.svg?)](https://travis-ci.org/jbenner-radham/node-debracketify)
[![license](https://img.shields.io/github/license/jbenner-radham/node-debracketify.svg?)](LICENSE)

Remove encompassing square brackets from a string.

Install
-------
```sh
$ yarn add debracketify # Or alternatively: `npm install debracketify`
```

Usage
-----
```sh
'use strict';

const debracketify = require('debracketify');

debracketify('[Example]'); // >> 'Example'
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
