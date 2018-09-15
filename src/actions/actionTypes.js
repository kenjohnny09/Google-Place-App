export const SEARCH_LOCATION = "SEARCH_LOCATION"
export const SHOW_LOCATION = "SHOW_LOCATION"

export function searchLocation(location, address) {
    return { type: SEARCH_LOCATION, location, address }
}

export function showLocation(location) {
    return { type: SHOW_LOCATION, location }
}
