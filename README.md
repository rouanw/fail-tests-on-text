# fail-tests-on-text

[![npm version](https://badge.fury.io/js/fail-tests-on-text.svg)](https://badge.fury.io/js/fail-tests-on-text)
![Dependency Status](https://david-dm.org/rouanw/fail-tests-on-text.svg)
![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)

Tired of React warnings slipping into your code base unnoticed?

__1. Install__

```sh
npm install --save-dev fail-tests-on-text
```

__2. Use__

```js
import failTestsOnText from 'fail-tests-on-text';

failTestsOnText(); // In your test setup somewhere.
```

__3. Profit__

Now any test that causes a React warning to be logged to the console will fail.

Tested with [Mocha](https://mochajs.org/) and [Tape](https://github.com/substack/tape) using React 16.

## Licence

MIT
