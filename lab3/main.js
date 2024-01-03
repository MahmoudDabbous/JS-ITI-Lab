const loginForm = document.getElementById('login');
const calculatorForm = document.getElementById('calculate');
const calc = document.getElementById('calc');
const contact = document.getElementById('contact');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('inputUserName').value;
  const pass = document.getElementById('inputPassword').value;

  if (user === 'admin' && pass === '421$$') {
    alert('Welcome login success');
  } else {
    alert('Invalid username or password');
  }
});

calculatorForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const num1 = parseFloat(document.getElementById('inputNumberOne').value);
  const num2 = parseFloat(document.getElementById('inputNumberTwo').value);
  const operation = document.getElementById('selection').value;

  switch (operation) {
    case 'sum':
      alert(num1 + num2);
      break;
    case 'multi':
      alert(num1 * num2);
      break;
    case 'subtract':
      alert(num1 - num2);
      break;
    case 'division':
      if (num2 !== 0) {
        alert(num1 / num2);
      } else {
        alert('Cannot divide by zero');
      }
      break;
    case 'moduls':
      alert(num1 % num2);
      break;
  }
});

calc.addEventListener('click', function (e) {
  const count = parseInt(prompt("How many numbers do you want to sum?"));
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const num = parseFloat(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const average = sum / numbers.length;
  alert(`The Sum is: ${sum}\nThe Average is: ${average}`);
});

contact.addEventListener('click', function (e) {
  const contacts = [];
  function addContact() {
    const name = prompt("Enter the name of the contact:");
    const phoneNumber = prompt("Enter the phone number:");

    const contact = {
      name: name,
      phoneNumber: phoneNumber
    };

    contacts.push(contact);
    alert("Contact added successfully!");
  }

  function searchContact() {
    const search = prompt("Enter name or phone number to search:");

    const foundContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phoneNumber.includes(search)
    );

    if (foundContacts.length === 0) {
      alert("No contacts found.");
    } else {
      foundContacts.forEach(contact => {
        alert(`Name: ${contact.name}\nPhone: ${contact.phoneNumber}`);
      });
    }
  }

  while (true) {
    const operation = prompt("Enter 'add' to add contact or 'search' to search for contacts:\n Enter 'exit' to exit");

    if (operation === 'add') {
      addContact();
    } else if (operation === 'search') {
      searchContact();
    } else if (operation === 'exit') {
      break;
    } else {
      alert("Invalid operation. Please enter 'add' or 'search'.");
    }
  }
});