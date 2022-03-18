class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue","Steele", 4);


console.log(firstStudent, secondStudent)