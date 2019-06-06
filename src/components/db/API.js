import APIkey from "./hiddenKey"
const db = "http://localhost:8080"

const API = {
    googleMaps: () => {
        // CORB ERROR
        return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.132930, -86.756625&radius=24140.2&keyword=counselor&key=${APIkey}`)
            .then(w => w.json())
    }
}

export default API;