const mostFrequentNum = arr => {
    let mostFrequent = { key: null, value: null }, frequency = new Map();

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let exisitsValue = frequency.get(x);

        if (exisitsValue)
            frequency.set(x, exisitsValue + 1);
        else frequency.set(x, 1);

        exisitsValue = frequency.get(x);

        if (mostFrequent.key == null) {
            mostFrequent.key = x;
            mostFrequent.value = 1;
        }
        else if (mostFrequent.value < exisitsValue) {
            mostFrequent.key = x;
            mostFrequent.value = exisitsValue;
        }
        else if (mostFrequent.value == exisitsValue && mostFrequent.key > x) {
            mostFrequent.key = x;
        }

    }

    return mostFrequent.key;
}

console.log(mostFrequentNum([3, 5,5, 2, 5, 3, 3, 1, 4]));