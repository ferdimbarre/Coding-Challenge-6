//Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Create a Function to Display Employee Shift Details
function displayEmployeeShifts (employees, employeeName) { //accepts the employee object and the input employeeName
    let findEmployee = employees.find(employees => employees.name === employeeName) // finds the employee with the shit being logged
    if (findEmployee) {findEmployee.shifts.forEach (({day, hours})=> { console.log(`Employee ${findEmployee.name} is currently working on ${day} for ${hours} hours`)}) //logs the shift 
    return findEmployee //example output: Employee David is currently working on Monday for 8 hours
    }};


