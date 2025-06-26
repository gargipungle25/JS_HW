let arrMarks=[45,90,87,67,23]

const increaseMarks=(marks)=>{
    for(let i=0; i<marks.length; i++){
        marks[i]+=10;
    }
    return marks
}

console.log(increaseMarks(arrMarks));

