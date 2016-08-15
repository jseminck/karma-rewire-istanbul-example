# karma-rewire-istanbul-example

This is a small example front-end React based application with testing set up so that we have mocking of dependencies through `babel-rewire-plugin` and code coverage through `babel-plugin-istanbul`.

It's using Karma as test-runner with Jasmine as testing framework.

There is one file which is untested to make sure also those files are included in the output.

To run the tests:

`npm run test`

To see the code coverage:

`open coverage/PhantomJS\ 2.1.1\ \(Mac\ OS\ X\ 0.0.0\)/index.html`