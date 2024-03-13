interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mohamed',
  lastName: 'Ezzat',
  age: 19,
  location: 'Qalyubia',
};

const student2: Student = {
  firstName: 'Mohamed2',
  lastName: 'Ezzat',
  age: 19,
  location: 'Qalyubia',
};

const studentsList: Array<Student> = [student1, student2];

function renderTable(): void {
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = '';

  studentsList.forEach((student) => {
    const trow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    trow.appendChild(firstNameCell);
    trow.appendChild(locationCell);
    tableBody.appendChild(trow);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
