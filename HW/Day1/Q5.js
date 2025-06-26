const arrMarks=[90,45,67,89,34]

//map

const a = arrMarks.map(marks=>{
    if (marks>90) {
        return "A"
    } else if (marks>80) {
        return "B"
    } else if (marks>70) {
        return "C"
    }else{
        return "Failed"
    }
})

console.log("Grades: ",a);

//filter
const b = arrMarks.filter(marks=>marks>75)

//reduce
const c = arrMarks.reduce(function total(total,marks) {
    return  total+marks
})

console.log("Marks above 75: ",b);
console.log("Total marls of Students: ",c);
