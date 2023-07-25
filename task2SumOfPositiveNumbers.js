const sumPositive = arr => {
    const result = arr.reduce((sum, x) => sum + x, 0);
    
    return result;
}

console.log(sumPositive([1,2,3,4]))