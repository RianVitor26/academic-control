import { toggleMenu } from "./menu.js";
import { toggleModal, cancelModal, removeModal } from "./modal.js";
import { createNewLineOnTable } from "./createNewLineOnTable.js";

const createNewDataInputs = document.querySelectorAll('.create-new-data-input')
const forms = document.querySelectorAll('form')

toggleMenu()
toggleModal()
cancelModal()

export function saveOnLocalStorage(key, value) {
    let entities = JSON.parse(localStorage.getItem(key))
    if (entities === null) {
        entities = []
    } else if (!Array.isArray(entities)) {
        entities = [entities]
    }
    entities.push(value)
    localStorage.setItem(key, JSON.stringify(entities))
}


Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const tableID = form.dataset.table
        Array.from(createNewDataInputs).forEach(input => {
            if (input.value.trim().length > 0) {
                const value = input.value
                createNewLineOnTable(tableID, value)
                input.value = '' 
            }
        })
        
        removeModal()
    })
})
