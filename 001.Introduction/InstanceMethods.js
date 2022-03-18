class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies++
        if(this.tardies>=3){
            return "You are Expelled!!!"
        }
        return `${this.firstName} ${this.lastName} has been late for ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score)
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce((a,b) => a+b)
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue","Steele", 4);


console.log(firstStudent, secondStudent)
secondStudent.fullName()