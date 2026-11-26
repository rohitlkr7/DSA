function secondLargest(arr){
    let max = -Infinity;
    let SecondMax = -Infinity;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            SecondMax =max;
            max = arr[i];
        }else if(arr[i] > SecondMax && arr[i] !== max){
            SecondMax = arr[i]
        }
    }
    return SecondMax
};

let arr = [15, 35, 10 ,70 , 55];
console.log(secondLargest(arr));

// Space complexity = o(1)
// time complexity = o(n)