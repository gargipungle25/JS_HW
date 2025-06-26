let arrMarks=[98,54,67,89]

// let totalMarks=arrMarks.reduce((total,marks)=>{
//     return total+arrMarks; 
// })
function calTotalMarks(marks) {
    let total=0;
    for(let i=0; i<marks.length; i++){
        total+=marks[i];
    }    
    return total;
}
let totalMarks=calTotalMarks(arrMarks)
console.log(totalMarks);
