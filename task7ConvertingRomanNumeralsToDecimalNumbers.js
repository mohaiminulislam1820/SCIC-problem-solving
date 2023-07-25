const roman2Decimal = str => {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let sum = values[str[0]];

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == "I" && (str[i] == "V" || str[i] == "X"))
            sum += values[str[i]] - 1-values[str[i-1]];
        else if (str[i - 1] == "X" && (str[i] == "L" || str[i] == "C"))
            sum += values[str[i]] - 10 - values[str[i - 1]];
        else if (str[i - 1] == "C" && (str[i] == "D" || str[i] == "M"))
            sum += values[str[i]] - 100 - values[str[i - 1]];
        else sum += values[str[i]];
    }
    return sum;
}

console.log(roman2Decimal('XXI'));