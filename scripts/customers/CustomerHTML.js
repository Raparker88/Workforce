

export const customerHTMLConverter = (customer) => {
    return `
        <section class="customerCard">
            <h3>${customer.name}</h3>
            <h4>employees assigned</h4>
            <ul>
                ${customer.employees.map(employee => `<li>${employee.firstName} ${employee.lastName}</li>`).join('')}
            </ul>
        </section>
        `
}