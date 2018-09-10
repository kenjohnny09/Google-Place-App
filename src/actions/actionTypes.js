export const SEARCH_LOCATION = "SEARCH_LOCATION"
export const GET_LOCATIONS = "GET_LOCATIONS"

export function searchLocation(location) {
    return { type: SEARCH_LOCATION, location }
}

export function getLocations() {
    return { type: SEARCH_LOCATION }
}