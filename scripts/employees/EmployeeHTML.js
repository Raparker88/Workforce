


export const employeeHTMLConverter = (employeeObj) => {
    return `
    <div class="employeeCard">
        <header class="employee__name">
            <h2>${employeeObj.firstName} ${employeeObj.lastName}</h2>
        </header>
        <section class="emplyee__computer">
            Currently using a ${employeeObj.computer.year} ${employeeObj.computer.model}
        </section>
        <section class="employee__department">
            Works in the ${employeeObj.department.name} department
        </section>
        <section class="employee__location">
            Works at the ${employeeObj.location.city} office
        </section>
        <section class="employee_customers">
            <ul class="customerList">
                ${employeeObj.customers.map(customer => `<li>${customer.name}</li>`).join('')}
            </ul>
        </section>
    </div>`

}