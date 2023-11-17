function DevLim(func, param ='x') {
    const supported_functions = {

        e: `1 + ${param}/1 + ${param}^2/2 + ${param}^3/6`,
        sh: `${param} + ${param}^3/6`,
        ch: `1 + ${param}^2/2`,
        sin: `${param} - ${param}^3/6`,
        cos: `1 - ${param}^2/2`,
        tan: `${param} + ${param}^3/3`,
        th: `${param} - ${param}^3/3`,
        arctan: `${param} - ${param}^3/3`,
        argth: `${param} + ${param}^3/3`,
        arcsin:`${param} - ${param}^3/6`,
        argsh:`${param} - ${param}^3/6`,

    };

    if (func in supported_functions) {
        return supported_functions[func];
    }else {
        return func+' is not supported !';
    }
}

module.exports = DevLim;