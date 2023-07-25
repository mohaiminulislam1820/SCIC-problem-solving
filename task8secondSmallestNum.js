const secondSmallestNum = arr => {
    let smallest = arr[0], secondSmallest = null;
    
    for (let i = 1; i < arr.length; i++){
        let temp=smallest;
        if (arr[i] < smallest) {
            smallest = arr[i];
            secondSmallest = temp;
        }
        else if (secondSmallest == null)
            secondSmallest = arr[i];

        else if (arr[i] < secondSmallest)
            secondSmallest = arr[i];
    }

    return secondSmallest;
}

console.log(secondSmallestNum([2, -5, 10, -3, 7,-7]));