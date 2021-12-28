module.exports = function(babel) {
    console.log('babel----', babel.template)
    const t = babel.types;

    const visitor = {
        // BinaryExpression(path) {
        //     const node = path.node;
        //     const operator = node.operator;
        //     const leftVal = node.left.value;
        //     const rightVal = node.right.value;
        //     const value = eval(leftVal + operator + rightVal)
        //     path.replaceWith(
        //         t.numericLiteral(value)
        //     );
        // },
        /* console函数加参数 */
        CallExpression(path, state) {
            const node = path.node;
            const child = node.callee;

            if (t.isMemberExpression(child) && child.object.name === 'console' && ['log', 'debug', 'info'].includes(child.property.name)) {
                const { line, column } = node.loc.start;
                node.arguments.unshift(t.stringLiteral(`filename: (${line}:${column})`));
            }
        }
    };

    return {
        visitor
    };
}