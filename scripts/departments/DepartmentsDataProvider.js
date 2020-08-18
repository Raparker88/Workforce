let departments = []

export const getDepartments = () => {
    return fetch('http://localhost:3000/departments')
        .then(response => response.json())
        .then(parsedDepartments => {
            departments = parsedDepartments
        })
}

export const useDepartments = () => {
    return departments.slice()
}