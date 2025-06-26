let passedMarks=[45,55,20,10,67,87,90]

function filterPassedStudents(passedMarks){
    let passedStudents=[]
    for(let i=0; i<passedMarks.length; i++){
        if (passedMarks[i]>40) {
            passedStudents.push(passedMarks[i]);
            
        }
    }
    return passedStudents
}

console.log(filterPassedStudents(passedMarks));
