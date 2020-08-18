


export const employeeHTMLConverter = (employee, computer, department, location) => {
    return `
    <div class="employeeCard">
        <header class="employee__name">
            <h2>${employee.firstName} ${employee.lastName}</h2>
        </header>
        <section class="emplyee__computer">
            Currently using a ${computer.year} ${computer.model}
        </section>
        <section class="employee__department">
            Works in the ${department.name} department
        </section>
        <section class="employee__location">
            Works at the ${location.city} office
        </section>
    </div>`

}