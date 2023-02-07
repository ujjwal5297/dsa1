// Q1

function deleteElement(array, n){
    const newArray = [];

    for (let i=0; i<array.length; i++){
if(array[i] !== n){
    newArray.push(array[i]);
}
    }
    return newArray;
}

const result = deleteElement([10,20,30,50,40],50);
console.log(result)

// Q2

let myArr = [10,20,30,40,50,60];
let item = 40;

for(i=0; i<myArr.length-1; i++)
{
    if(myArr[i] === item)
    {
        index=i;
        break; 
    }
}
console.log(`Index no. of an element is ${index} and the element is ${item}`);


// Q3
let myArr1 = [100,220,130,140,600,100,130];

item = 130;


// An empty array to push index value
let newArray1 = [];



for(i=0; i<=myArr1.length-1; i++)
{
    if(myArr1[i] === parseInt(item))
    {
        newArray1.push(i);

    }
    

}
console.log(newArray1);