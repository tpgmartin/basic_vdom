// Dependencies
var Mocha = require('mocha');

// Determine which tests to run based on argument passed to runner
var args = process.argv.splice(2);
var files;



//Define Mocha
var mocha = new Mocha({
  timeout: 60000,
  reporter: 'spec'
});

args.forEach(mocha.addFile.bind(mocha));

//Run unit tests
mocha.run(function (failures) {
    process.exit(failures);
});
