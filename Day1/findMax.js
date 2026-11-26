function findMax(arr){
    let max = arr[0]
    for(i=0; i<arr.length; i++){
         if(arr[i] > max){
            max = arr[i]
         }
    }
    return max;
}

let arr = [3,11,5,9,34];
console.log(findMax(arr))