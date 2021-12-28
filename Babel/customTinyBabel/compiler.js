var fs = require('fs');
var tokenizer = require('./tokenizer');
var parser = require('./parser');
var transformer = require('./transformer');
var generator = require('./generator');

const fileName = process.argv[2];

// fs.readFile(fileName, (err, data) => {
    // const codeStr = data.toString();
    const codeStr = 'const add = (a, b) => a + b';
    console.log('codeStr------', codeStr)

    const tokens = tokenizer(codeStr);
    const ast = parser(tokens);
    const newAst = transformer(ast);
    const output = generator(newAst);
    console.log(output);
    return output;
// })
