import { getEmployeeCustomers, useEmployeeCustomers } from "../customers/EmployeeCustomerProvider.js"
import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"
import { getEmployees, useEmployees } from "../employees/EmployeeDataProvider.js"
import { customerHTMLConverter } from "./CustomerHTML.js"

const contentTarget = document.querySelector(".customerList")

let employees = []
let customers = []
let employeeCustomers = []

export const customerList = () => {
    getEmployees()
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(() => {
        employees = useEmployees()
        customers = useCustomers()
        employeeCustomers = useEmployeeCustomers()
        render ()
    })
}

const render = () => {
    const HTMLString = customers.map(customer => {
        let employeeCustomerRelations = getRelationships(customer)
    
        let matchingEmployees = getEmployeeMatch(employeeCustomerRelations)

        customer.employees = matchingEmployees


        return customerHTMLConverter(customer)
    }).join('')
    contentTarget.innerHTML = `
    <h2>Customers</h2>
    ${HTMLString}`
}


const getRelationships = (customerObj) => {
    const relationships = employeeCustomers.filter(pairing => pairing.customerId === customerObj.id)
    return relationships
}

const getEmployeeMatch = (relationshipArr) => {
    const employeeArr = relationshipArr.map(r => {
       return employees.find(e => e.id === r.employeeId)
    })
    return employeeArr
}