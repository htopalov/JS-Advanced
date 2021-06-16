class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || Number(salary) < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }
        let emp = {
            username: username,
            salary: Number(salary),
            position: position,
        };
        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }
        this.departments[department].push(emp);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let department = '';
        let highestSalary = 0;
        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(x => {
                salary += x.salary;
            });
            salary /= value.length;
            if (salary > highestSalary) {
                department = key;
                highestSalary = salary;
            }
        });
        if (department != '') {
            let result = `Best Department is: ${department}\nAverage salary: ${highestSalary.toFixed(2)}\n`;
            Object.values(this.departments[department])
                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
                .forEach(x => {
                    let employee = `${x.username} ${x.salary} ${x.position}\n`;
                    result += employee;
                })
            return result.trim();
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
