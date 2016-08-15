/**
 * All templates, tests and sources are required
 * and compiled with webpack into one bundle.
 */
import "babel-polyfill";

// require all "tests/*.js"
const testsContext = require.context("./", true, /Test\.js$/);
testsContext.keys().forEach(testsContext);

// require all "../src/**/*.js"
const sourcesContext = require.context("./../src/", true, /\.js$/);
sourcesContext.keys().forEach(sourcesContext);
