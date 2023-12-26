const firstName = prompt("Please enter your first name:");
const lastName = prompt("Please enter your last name:")
const Btn = document.getElementById('btn');

alert(`Hello ${firstName} ${lastName} it is an honor to meet you\nIt is the first release for our new calculator try it now by clicking the button`);

Btn.addEventListener('click', () => {
  const number1 = prompt("Please enter 1st number:");
  const number2 = prompt("Please enter 2nd number:");

  if(isNaN(+number1 + +number2))
  {
    alert("Wrong input, Please Try again");
  }
  else
  {

    alert(+number1 + +number2);
  }
})
