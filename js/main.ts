interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // for extra attributes like 'contract'
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// 👇 This will actually show it on the browser
document.body.innerHTML = `
  <h1>Teacher Info</h1>
  <ul>
    <li><strong>First Name:</strong> ${teacher3.firstName}</li>
    <li><strong>Last Name:</strong> ${teacher3.lastName}</li>
    <li><strong>Full Time:</strong> ${teacher3.fullTimeEmployee}</li>
    <li><strong>Location:</strong> ${teacher3.location}</li>
    <li><strong>Contract:</strong> ${teacher3.contract}</li>
  </ul>
`;