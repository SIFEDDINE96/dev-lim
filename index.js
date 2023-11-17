function DevLim(func) {
    const supported_functions = {

        e: '1 + x/1 + x^2/2 + x^3/6',
        sh: 'x + x^3/6',
        ch: '1 + x^2/2',
        sin: 'x - x^3/6',
        cos: '1 - x^2/2',
        tan: 'x + x^3/3',
        th: 'x - x^3/3',
        arctan: 'x - x^3/3',
        argth: 'x + x^3/3',
        arcsin:'x - x^3/6',
        argsh:'x - x^3/6',

    };

    if (func in supported_functions) {
        return supported_functions[func];
    }else {
        return func+' is not supported !';
    }
}

module.exports = DevLim;