# generator-easily [![Build Status](https://secure.travis-ci.org/kristw/generator-easily.svg?branch=master)](https://travis-ci.org/kristw/generator-easily) [![Coverage Status](https://coveralls.io/repos/kristw/generator-easily/badge.svg?branch=master&service=github)](https://coveralls.io/github/kristw/generator-easily?branch=master)


> Yeoman generator generating a Yeoman generator

![Yo dawg, I heard you like generators?](http://i.imgur.com/2gqiift.jpg)


## Getting started

- Install: `npm install -g generator-easily`
- Run: `yo generator`


## Commands

* `yo generator` shows a wizard for generating a new generator
* `yo generator:subgenerator <name>` generates a subgenerator with the name `<name>`


## What do you get?

Scaffolds out a complete generator directory structure for you:

```
.
├── generators/
│   └── app/
│       ├── index.js
│       └── templates/
│           └── __package.json
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .eslintrc
├── .travis.yml
├── .yo-rc.json
├── package.json
├── gulpfile.js
├── README.md
├── LICENSE
└── test/
    └── app.js
```

Refer to [our documentation](http://yeoman.io/authoring/) to learn more about creating a Yeoman generator.

### Running tests

Run `npm test` to run your test suite.

These tests will be run automatically in your git repository if you connect [Travis CI](https://travis-ci.org/profile). You can also track test coverage using [Coveralls](https://coveralls.io).

## Contributing

See the [contribution docs](http://yeoman.io/contributing/).

When submitting an issue, please follow [the
guidelines](http://yeoman.io/contributing/opening-issues.html).
It is especially important to make sure Yeoman is up-to-date, and providing the
command or commands that cause the issue.


## License

Apache-2 © Krist Wongsuphasawat <krist.wongz@gmail.com>

Forked from generator-generator

MIT © Pascal Hartig <phartig@rdrei.net> and other contributors
