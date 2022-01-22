/*
    - objects = {}
    - arrays = []
    - functions = function name (){}
    - classes = new object
    - linkedlist
*/

let arr = [1,"hello",5,1,6,"hello"]

/////////////////////1st attempt///////////////////////
// function RemoveDuplicates (arr) {
//     let newArr = []
//     arr.forEach(function(element) {
//         if (!newArr.includes(element)) {
//             newArr.push(element)
//         }
//     });
//     return newArr;
// }

// console.log(RemoveDuplicates(arr));
/////////////////////1st attempt///////////////////////

/////////////////////2nd attempt///////////////////////
// function RemoveDuplicates (arr) {
//     return arr.filter(
//         function (value, index){
//             return arr.indexOf(value) === index
//     })
// }

// console.log(RemoveDuplicates(arr))
/////////////////////2nd attempt///////////////////////

/////////////////////3rd attempt///////////////////////
// function RemoveDuplicates (arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (!newArr.includes(arr[i])) {
//             newArr[i] = arr[i]
//         }
//     }
//     return newArr
// }
// console.log(RemoveDuplicates(arr))
/////////////////////3rd attempt///////////////////////

/////////////////////Problem 2/////////////////////////
/*
    Search for an element
*/
//return the index of the element you are looking for, else return -

/////////////////////1st attempt///////////////////////
// function Search (arr, elem){
//     let found = arr.find(Element => Element > hello);
// }
// return found
// console.log(found);
/////////////////////1st attempt///////////////////////

/////////////////////2nd attempt///////////////////////
// function search(arr, elem){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === elem){
//             return i
//         }
//     }
//     return -1
// }
// console.log(search(arr))
/////////////////////2nd attempt///////////////////////