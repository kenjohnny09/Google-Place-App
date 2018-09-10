export const SEARCH_LOCATION = "SEARCH_LOCATION"

export function searchLocation(location, address) {
    return { type: SEARCH_LOCATION, location, address }
}
