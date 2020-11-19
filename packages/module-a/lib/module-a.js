const moduleB = require('module-b');
const moduleA = function() {
    console.log('hello world moduleA~~');
    console.log(moduleB());
}
module.exports = moduleA;
moduleA()