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

class Employee extends Person {
    constructor(fullName, money, sleepMood, healthRate, id, email, workMood, salary, isManager) {
        super(fullName, money, sleepMood, healthRate);
        this.id = id;
        this.email = email;
        this.workMood = workMood;
        this.salary = salary >= 1000 ? salary : 1000;
        this.isManager = isManager;
    }

    work(hours) {
        if (hours === 8) {
            this.workMood = 'Happy';
        } else if (hours < 8) {
            this.workMood = 'Tired';
        } else {
            this.workMood = 'Lazy';
        }
    }
}

class Office {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployee(empId) {
        const employee = this.employees.find(emp => emp.id === empId);
        if (employee) {
            if (employee.isManager) {
                const { id, email, fullName, sleepMood, healthRate, workMood, isManager } = employee;
                return { id, email, fullName, sleepMood, healthRate, workMood, isManager };
            } else {
                return { id: employee.id, email: employee.email, fullName: employee.fullName };
            }
        }
        return null;
    }

    hire(newEmployee) {
        this.employees.push(newEmployee);
    }

    fire(empId) {
        this.employees = this.employees.filter(emp => emp.id !== empId);
    }
}

const office = new Office('Office');
let flag = true;

while (flag) {
    const userInput = prompt(`
    1. Add new employee "add"
    2. fire an employee "fire"
    3. get all employees "all"
    4. Quit "q"
    Enter your choice:`);

    switch (userInput) {
        case 'add':
            const name = prompt('Enter Name:');
            const salary = +prompt('Enter Salary:');
            const email = prompt('Enter Email:');
            const isManager = (prompt('Are they a manager? (y|Y)/other key').toLowerCase() === 'y');
            const newEmployee = new Employee(name, 0, '', 0, email, email, '', salary, isManager);
            office.hire(newEmployee);
            break;
        case 'fire':
            const employeeToFireId = prompt('Enter Employee Email to fire:');
            const employeeToFire = office.getEmployee(employeeToFireId);
            if (employeeToFire) {
                office.fire(employeeToFireId);
                alert(`Employee ${employeeToFire.fullName} has been fired.`);
            } else {
                alert('Not a valid employee email.');
            }
            break;
        case 'all':
            const allEmployees = office.getAllEmployees();
            let str = '';
            allEmployees.forEach(emp => str += `${emp.isManager ? 'Mgr:' : 'Emp:'} ${emp.fullName} \n`);
            alert(`All Employees: \n${str}`);
            break;
        case 'q':
            flag = false;
            break;
        default:
            alert(`Invalid input. Please try again.`);
    }
}