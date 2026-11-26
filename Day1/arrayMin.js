let arr =[12 , 5 , 20 ,3 ,15,8]
function findMin(arr){
    let min = arr[0] 
    for (let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin(arr))