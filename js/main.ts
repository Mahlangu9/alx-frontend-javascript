interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Function

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Class

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Usage examples

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log('Teacher:', teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

console.log('Print Teacher:', printTeacher('John', 'Doe'));

const student = new StudentClass('Alice', 'Smith');
console.log('Student working:', student.workOnHomework());
console.log('Student name:', student.displayName());

// Optional: render to the DOM if needed
document.body.innerHTML = `
  <h1>Teacher: ${teacher3.firstName} ${teacher3.lastName}</h1>
  <h2>Director Reports: ${director1.numberOfReports}</h2>
  <h3>Student: ${student.displayName()}</h3>
  <p>${student.workOnHomework()}</p>
`;

