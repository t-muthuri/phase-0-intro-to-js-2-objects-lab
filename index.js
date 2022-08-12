// Write your solution in this file!
const employee = {
    name: "Andy",
    streetAddress: "Hse 10 Buru",
};

function updateEmployeeWithKeyAndValue (){
    return {
        ...employee,
        ["name"]:"Sam",
        ["streetAddress"]:"11 Broadway",
    };
};

function beforeEach (){
    employee.length = 0
    employee.push(
        "name"["Andy"],
        "streetAddress"["Hse 10 Buru"],
    );
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee ["name"] = "Sam";
    employee ["streetAddress"] = "12 Broadway";
    return employee;
}

function beforeEach1 (){
    employee.length = 0
    employee.push(
        "name"["Andy"],
        "streetAddress"["Hse 10 Buru"],
    );
}

const newEmployee = {
    name : undefined,
};

function deleteFromEmployeeByKey(){
        delete newEmployee ["name"];
        return newEmployee;
}

function beforeEach2 (){
    employee.length = 0
    employee.push(
        "name"["Andy"],
        "streetAddress"["Hse 10 Buru"],
    );
    }

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}