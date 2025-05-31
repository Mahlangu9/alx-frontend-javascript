interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

function displayObject(id: string, obj: Object): void {
  const container = document.createElement('pre');
  container.id = id;
  container.textContent = `${id}:\n` + JSON.stringify(obj, null, 2);
  document.body.appendChild(container);
}

displayObject('Teacher', teacher3);
displayObject('Director', director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Optional browser output
const result = document.createElement('p');
result.textContent = printTeacher("John", "Doe");
document.body.appendChild(result);

