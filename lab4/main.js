function PersonConstructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;

    this.sleep = function (hours) {
        if (hours === 7) {
            this.sleepMood = 'Happy';
        } else if (hours < 7) {
            this.sleepMood = 'Tired';
        } else {
            this.sleepMood = 'Lazy';
        }
    };

    this.eat = function (meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    };

    this.buy = function (items) {
        this.money -= items * 10;
    };
}

class Person {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'Happy';
        } else if (hours < 7) {
            this.sleepMood = 'Tired';
        } else {
            this.sleepMood = 'Lazy';
        }
    }

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

const PersonObject = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'Happy';
        } else if (hours < 7) {
            this.sleepMood = 'Tired';
        } else {
            this.sleepMood = 'Lazy';
        }
    },

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },

    buy(items) {
        this.money -= items * 10;
    }
};

function createPerson(fullName, money, sleepMood, healthRate) {
    return {
        fullName,
        money,
        sleepMood,
        healthRate,
        sleep(hours) {
            if (hours === 7) {
                this.sleepMood = 'Happy';
            } else if (hours < 7) {
                this.sleepMood = 'Tired';
            } else {
                this.sleepMood = 'Lazy';
            }
        },
        eat(meals) {
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
        },
        buy(items) {
            this.money -= items * 10;
        }
    };
}

function displayPerson(person) {
    const i = +prompt(`${person.fullName} has ${person.money}$\n${person.fullName} is ${person.sleepMood} and has ${person.healthRate} health rate\n${person.fullName} wants to buy an item\nHow many items will ${person.fullName} buy?`);
    person.buy(i);
    alert(`${person.fullName} has ${person.money}$ now`);
}

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('inputFullName').value;
    const sleep = +document.getElementById('inputHour').value;
    const meals = +document.getElementById('inputHealth').value;
    const money = +document.getElementById('inputMoney').value;

    switch (document.getElementById('selection').value) {
        case 'constructor':
            const person1 = new PersonConstructor(name, money, 'Tired', 0);
            person1.eat(meals);
            person1.sleep(sleep);
            displayPerson(person1);
            break;
        case 'class':
            const person2 = new Person(name, money, 'Tired', 0);
            person2.eat(meals);
            person2.sleep(sleep);
            displayPerson(person2);
            break;
        case 'OLOO':
            const person3 = Object.create(PersonObject).init(name, money, 'Tired', 0);
            person3.eat(meals);
            person3.sleep(sleep);
            displayPerson(person3);
            break;
        case 'factory':
            const person4 = createPerson(name, money, 'Tired', 0);
            person4.eat(meals);
            person4.sleep(sleep);
            displayPerson(person4);
            break;
    }
});
