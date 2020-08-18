
let computers = []

export const getComputers = () => {
    return fetch('http://localhost:3000/computers')
        .then(response => response.json())
        .then(parsedComputers => {
            computers = parsedComputers
        })
}

export const useComputers = () => {
    return computers.slice()
}