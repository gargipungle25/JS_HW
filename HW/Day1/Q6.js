let arrMarks=[78,90,35,99,76]

function findTopper(marks){
    // return Math.max(...arrMarks) //using spread operator

    let highest=marks[0]
    for(let i=0; i<marks.length; i++){
        if(marks[i]>highest){
            highest=marks[i]
        }
    }
    return highest
}

console.log(findTopper(arrMarks));

