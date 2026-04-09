class Student{
    constructor(name){
        this.name = name;
    }

        display(){
            console.log(this.name + "are a part of the", Student.college)
        }
    
}

Student.college = "MIT"

let s1 = new Student("Samruddhi")
let s2 = new Student("Samiksha")
let s3 = new Student("Samik")

s1.display()
s2.display()
s3.display()

/*
OP:
[Running] node "c:\Users\samee\OneDrive\Desktop\Samruddhi\Plawright AI mastery TTA\PlaywrightPrograms\Chapter_16_OOPS\static_1.js"
Samruddhi are a part of the MIT
Samiksha are a part of the MIT
Samik are a part of the MIT

*/