var fs = require('fs');
var babel = require('@babel/core');
var moriscript = require('./moriscript');
var addPlugin = require('./addPlugin');
var replaceParamsName = require('./replaceParamsNamePlugin');

// read the filename from the command line arguments
var fileName = process.argv[2];

// read the code from this file
fs.readFile(fileName, function(err, data) {
    if (err) throw err;

    // convert from a buffer to a string
    var src = data.toString();

    babel.parse(src, {
        sourceFileName: 'index.js',
    }, function(err, result) {
        // console.log('parse result---------',  result)
    })

    // use our plugin to transform the source
    babel.transform(src, {
        plugins: [
            replaceParamsName,
        ],
        // sourceMaps: 'both',
    }, function(err, result) {
        console.log('result --', result); // result: { code, map, ast, option, metadata }
    });
});
