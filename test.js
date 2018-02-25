var fs = require('fs');
var woff2 = require('woff2');
var base64 = require('base-64');

var fontNames = [
    '<font-name-1>', // e.g.
    '<font-name-2>',
];

fontNames.forEach(function(name) {
    var input = fs.readFileSync(name);
    fs.writeFileSync(name+'.ttf', woff2.decode(input));
}, this);
