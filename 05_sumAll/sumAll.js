const sumAll = function(a, b) {
    if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) {
        return "ERROR"
    }
    max = Math.max(a,b)
    min = Math.min(a,b)
    sum = 0
    for (let i = min; i<= max; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
