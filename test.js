// arr = [1,2,3,4,5,6,7,8,9];
// n=8;
// result = [[ 1, 7 ], [ 2, 6 ],[ 3, 5 ], [ 4, 4 ],[ 5, 3 ], [ 6, 2 ],[ 7, 1 ]];


// Contoh2:
// arr = [0,1,2,3,4,5,6];
// n=6;
// result = [[ 0, 6 ], [ 1, 5 ],[ 2, 4 ], [ 3, 3 ],[ 4, 2 ], [ 5, 1 ],[ 6, 0 ]];

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = [6, 1, 2, 3, 4, 5, 6];

// const m = 8;
const m = 6;

function sum(arr, n) {
    const temp = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                temp.push([arr[i], arr[j]])
                break
            }
        }
    }
    return temp
}

console.log(sum(array, m));