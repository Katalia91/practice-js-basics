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

  calculateAvg(gradesArray) {
    const arrLength = gradesArray.length;
    const sum = gradesArray.reduce(function (acc, currentVal) {
      return acc + currentVal;
    }, 0);
    const avg = Math.ceil((sum / arrLength) * 100) / 100;
    return avg;
  }
  getAverageGrade(subject) {
    const subjectArray = this.grades[subject];
    if (subject === undefined) {
      let allGrades = [];
      for (const subject in this.grades) {
        allGrades = allGrades.concat(this.grades[subject]);
      }
      const avg = this.calculateAvg(allGrades);
      return avg;
    } else {
      const avg = this.calculateAvg(subjectArray);
      return avg;
    }
  }
  get fullName() {
    console.log("Zapisuje informację");
    return this.firstName + this.lastName;
  }
}
const student = new StudentOriginal("Natalia", "Kur");
student.addGrade("maths", 5);
student.addGrade("maths", 4);
student.addGrade("english", 6);
student.addGrade("english", 5);
student.addGrade("english", 5);
student.addGrade("biology", 5);
console.log(student.getAverageGrade("maths"));
console.log(student.getAverageGrade());
