import { getUserFromLocalStorage } from '../login/LoginHandler'

import APIkey from "./hiddenKey"
const db = "http://localhost:8088"

let thisUser = getUserFromLocalStorage()
let currentUser = thisUser.id


const API = {
    googleMaps: () => {
        // CORB ERROR
        return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.132930, -86.756625&radius=24140.2&keyword=counselor&key=${APIkey}`)
            .then(w => w.json())
    },
    getAllMoods: () => {
        return fetch(`${db}/moods?_expand=moodCategory`)
            .then(results => results.json())
    },
    getSpecificMood: (id) => {
        return fetch(`${db}/moods?moodCategoryId=${id}`)
            .then(results => results.json())
    },
    submitEntry: (obj) => {
        return fetch(`${db}/loggedEntries`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(e => e.json())
    },
    getSpecificCopingMech: (id) => {
        return fetch(`${db}/copingMechanisms?moodCategoryId=${id}&userId=${currentUser}`)
            .then(results => results.json())
    },
    getAllCopingMechs: () => {
        return fetch(`${db}/copingMechanisms?userId=${currentUser}`)
            .then(results => results.json())
    },
    editCopingMech: (entryId, entryObj) => {
        return fetch(`${db}/copingMechanisms/${entryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        }).then(response => response.json())
    }
}

export default API;