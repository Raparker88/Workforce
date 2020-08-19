import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"
import { getComputers, useComputers } from "../computers/ComputerDataProvider.js"
import { employeeHTMLConverter } from "./EmployeeHTML.js"
import { getDepartments, useDepartments } from "../departments/DepartmentsDataProvider.js"
import { getLocations, useLocations } from "../locations/LocationsDataProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "../customers/EmployeeCustomerProvider.js"
import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"

const contentTarget = document.querySelector(".employeeList")

let employees = []
let computers = []
let departments = []
let locations = []
let customers = []
let employeeCustomers = []

export const employeeList = () => {
    getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(() => {
        employees = useEmployees()
        computers = useComputers()
        departments = useDepartments()
        locations = useLocations()
        customers = useCustomers()
        employeeCustomers = useEmployeeCustomers()
        render ()
    })
}

const render = () => {
    const HTMLString = employees.map(employee => {
        let employeeComputer = computers.find(computer => employee.computerId === computer.id)
        let employeeDepartment = departments.find(department => employee.departmentId === department.id)
        let employeeLocation = locations.find(location => employee.locationId === location.id)
        
        let employeeCustomerRelations = getRelationships(employee)
        let matchingCustomers = getCustomerMatch(employeeCustomerRelations)

        
        employee.department = employeeDepartment
        employee.computer = employeeComputer
        employee.location = employeeLocation
        employee.customers = matchingCustomers


        return employeeHTMLConverter(employee)
    }).join('')
    contentTarget.innerHTML = `
    <h2>Employees</h2>
    ${HTMLString}`
}


const getRelationships = (employeeObj) => {
    const relationships = employeeCustomers.filter(pairing => pairing.employeeId === employeeObj.id)
    return relationships
}

const getCustomerMatch = (relationshipArr) => {
    const customerObjArr = relationshipArr.map(r => {
       return customers.find(c => c.id === r.customerId)
    })
    return customerObjArr
}