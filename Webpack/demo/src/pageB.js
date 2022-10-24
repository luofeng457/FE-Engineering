const utilB = require('./utils/utilB');
console.log(utilB);

import('./utils/utilC').then((obj) => {
    console.log(obj.default());
});