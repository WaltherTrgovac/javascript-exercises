const sumAll = function() {
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) return 'ERROR';
    if (arguments[0] < 0 || arguments[1] < 0) return 'ERROR';

    let result = 0;
    for (let i = Math.min(arguments[0], arguments[1]); i <= Math.max(arguments[0], arguments[1]); i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
