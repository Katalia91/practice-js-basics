/* Zostawiłam zakomentowane kawałki specjalnie, dla siebie */

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
  getAverageGrade(subject) {
    const subjectArray = this.grades[subject];
    if (subject === undefined) {
      let allGrades = [];
      for (const subject in this.grades) {
        allGrades = allGrades.concat(this.grades[subject]);
      }
      const arrLength = allGrades.length;
      const sumOfAllGrades = allGrades.reduce(function (acc, currentVal) {
        return acc + currentVal;
      }, 0);
      const avg = Math.ceil((sumOfAllGrades / arrLength) * 100) / 100;
      return avg;
    } else {
      const numOfElements = subjectArray.length;
      const sum = subjectArray.reduce(function (acc, currentVal) {
        return acc + currentVal;
      }, 0);
      const avgOfOne = Math.ceil((sum / numOfElements) * 10) / 10;
      return avgOfOne;
    }
  }
  get fullName() {
    console.log("Zapisuje informację");
    return this.firstName + this.lastName;
  }
}
const student = new StudentOriginal("Natalia", "Kur");
student.addGrade("maths", 5);
student.addGrade("maths", 5);
student.addGrade("english", 4);
student.addGrade("english", 4);
student.addGrade("english", 4);
student.addGrade("biology", 3);
console.log(student.getAverageGrade());
console.log(student.getAverageGrade("maths"));
