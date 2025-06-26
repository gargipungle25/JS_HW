let arr=[89,67,89,90]

let arr1=[
    {name:"Gargi", id:1, marks:89},
    {name:"Valeska",id:2,marks:78},
    {name:"Valentina", id:3,marks:67},
    {name:"Ishika",id:4,marks:99}
]

const studentMarks=arr1.filter(arr1=>{
    return arr1.marks>80
})

console.log(studentMarks);
