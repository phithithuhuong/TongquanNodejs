let  arr = [1,3,5,7,9,2,4,6];
let  max= arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max<arr[i]){
        max = arr[i]
    }

}
console.log(max)