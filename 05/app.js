// function Student(firstNameVal, lastNameVal) {
//   this.firstName = firstNameVal;
//   this.lastName = lastNameVal;
//   this.grades = {
//     maths: [],
//     english: [],
//   };
// }
// Student.prototype.addGrade = function (subject, grade) {};

class StudentOriginal {
  constructor(firstNameVal, lastNameVal) {
    this.firstName = firstNameVal;
    this.lastName = lastNameVal;
    this.grades = {
      maths: [],
      english: [],
    };
  }
  addGrade(subject, grade) {
    if (this.grades[subject] === undefined) {
      this.grades[subject] = [];
    }
    this.grades[subject].push(grade);

    // if (this.grades[subject] !== undefined) {
    //   this.grades[subject].push(grade);
    // } else {
    //   this.grades[subject] = [];
    //   this.grades[subject].push(grade);
    // }
    // let mathsArray = [];
    // let englishArray = [];
    // const that = this;
    // function fn() {
    //   mathsArray = that.grades["maths"];
    //   englishArray = that.grades["english"];
    //   if (subject === "maths") {
    //     mathsArray.push(grade);
    //   } else if (subject === "english") {
    //     englishArray.push(grade);
    //   } else {
    //     console.log("There is no such subject or the subject was not given");
    //   }
    // }
    // fn();
    // return;
  }
  getAverageGrade(arr) {
    if (arr === undefined) {
    } else {
      const numOfElements = arr.length;
      const sum = arr.reduce(function (acc, currentVal) {
        return acc + currentVal;
      }, 0);
      const avg = Math.ceil((sum / numOfElements) * 10) / 10;
      return avg;
    }
  }
  get fullName() {
    console.log("Zapisuje informację");
    return this.firstName + this.lastName;
  }
}
const student = new StudentOriginal("Natalia", "Kur");
student.getSubject = function () {};
student.addGrade("maths", 5);
student.addGrade("maths", 4);
student.addGrade("english", 5);
student.addGrade("english", 6);
student.addGrade("english", 5);
student.addGrade("biology", 5);
console.log(student.getAverageGrade(student.grades["maths"]));
console.log(student.getAverageGrade(student.grades["english"]));
console.log(student.getAverageGrade(student.grades["biology"]));
// student.addGrade(6);
