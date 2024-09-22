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

// Create a Function to Assign a New Shift
function assignShift (findEmployee, employeeName) { //accepts findEmplyee which already finds wmployee by name and input employeeName
let hasShiftFriday = findEmployee.shifts.some(shift => shift.day === "Friday") //checks if employee already works friday
if (hasShiftFriday) {console.log(`Error: this employee is already working today`) //error message if employee unavailable
} else {findEmployee.shifts.push( { day: "Friday", hours: 3 });
console.log(findEmployee); //if employee available, log shift on friday
}};

// Create a Function to Calculate Total Hours Worked
function calculateTotalHours (findEmployee, employeeName) {
let totalHoursWorked = findEmployee.shifts.reduce((total, shift) => { return shift.hours + total}, 0)
return totalHoursWorked
}// calculates total hours an employee works 