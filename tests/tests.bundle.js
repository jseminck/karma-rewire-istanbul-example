/**
 * All templates, tests and sources are required
 * and compiled with webpack into one bundle.
 */
import "babel-polyfill";

// require all "tests/specs/**/*Test.js"
const testsContext = require.context("./", true, /Test\.js$/);
testsContext.keys().forEach(testsContext);
