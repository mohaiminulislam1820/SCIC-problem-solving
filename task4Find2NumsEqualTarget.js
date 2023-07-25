const find2NumsEqualTarget = (arr,target) => {
    const map = new Map();
    map.set(arr[0], 0);

    for (let i = 1; i < arr.length; i++){
        let remaining = target - arr[i];
        if (map.get(remaining))
            return `${map.get(remaining)},${i}`;
        else map.set(arr[i], i);
    }
    return 'none found';
    
}

console.log(find2NumsEqualTarget([1,3,6,8,11,15],9))