let locations = []

export const getLocations = () => {
    return fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then(parsedLocations => {
            locations = parsedLocations
        })
}

export const useLocations = () => {
    return locations.slice()
}