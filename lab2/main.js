const task1 = function () {
  do {
    const age = prompt('What is your age?');
    const numericAge = +age;
    if (numericAge <= 0 || isNaN(numericAge)) {
      alert('Please enter a valid age');
      return;
    }
    if (numericAge < 10) {
      alert('You are a child');
    } else if (numericAge < 18) {
      alert('You are a teenager');
    } else if (numericAge < 50) {
      alert('You are a grown up');
    } else {
      alert('You are an old person');
    }
  } while (confirm('Are you sure you want to continue'))
}

const task2 = function () {
  const str = prompt('Can you a string');
  const matches = str.match(/[aeiou]/gi);
  if (str.length <= 0) {
    alert('Please enter a string');
  } else {
    alert(`Number of vowels found is ${matches.length}`)
  }
}


const task3 = function () {
  const time = +prompt('Enter the Hour of the Day');

  if (time === 0) {
    alert(`12 am`)
  } else if (time < 12) {
    alert(`${time} am`);
  } else if (time > 12) {
    alert(`${time % 12} pm`);
  }
}

const btn1 = document.getElementById('task-1');
const btn2 = document.getElementById('task-2');
const btn3 = document.getElementById('task-3');

btn1.addEventListener('click', task1);
btn2.addEventListener('click', task2);
btn3.addEventListener('click', task3);