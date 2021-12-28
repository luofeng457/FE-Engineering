module.exports = function (babel) {
    const visitor = {
        FunctionDeclaration(path, state) {
            const firstParam = path.get('params.0');
            if (!firstParam) return;
            console.log('firstParam-------', firstParam)
            const i = path.scope.generateUid('_');
            path.scope.rename(firstParam.node.name, i);
        }
    }

    return {
        visitor
    }
};