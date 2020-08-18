import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"
import { getComputers, useComputers } from "../computers/ComputerDataProvider.js"
import { employeeHTMLConverter } from "./EmployeeHTML.js"
import { getDepartments, useDepartments } from "../departments/DepartmentsDataProvider.js"
import { getLocations, useLocations } from "../locations/LocationsDataProvider.js"

const contentTarget = document.querySelector(".employeeList")

export const employeeList = () => {
    getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(() => {
        const employees = useEmployees()
        const computers = useComputers()
        const departments = useDepartments()
        const locations = useLocations()
        render (employees, computers, departments, locations)
    })
}

const render = (employeesArr, computersArr, departmentsArr, locationArr) => {
    const HTMLString = employeesArr.map(employee => {
        let employeeComputer = computersArr.find(computer => employee.computerId === computer.id)
        let employeeDepartment = departmentsArr.find(department => employee.departmentId === department.id)
        let employeeLocation = locationArr.find(location => employee.locationId === location.id)
        return employeeHTMLConverter(employee, employeeComputer, employeeDepartment, employeeLocation)
    }).join('')
    contentTarget.innerHTML = `
    <h2>Employees</h2>
    ${HTMLString}`
}