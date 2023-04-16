import { toggleMenu, openMenuMobile } from "./menu.js"
import { toggleModal, cancelModal, removeModal } from "./modal.js"
import { createNewLineOnTable } from "./createNewLineOnTable.js"
import { fillTablesFromLocalStorage } from "./fillTablesFromLocalStorage.js"
import { saveOnLocalStorage } from './saveOnLocalStorage.js'

const createNewDataInputs = document.querySelectorAll('.create-new-data-input')
export const forms = document.querySelectorAll('form')

toggleMenu()
openMenuMobile()
toggleModal()
cancelModal()

window.addEventListener('load', () => fillTablesFromLocalStorage())


Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const tableID = form.dataset.table
        Array.from(createNewDataInputs).forEach(input => {
            if (input.value.trim().length > 0) {
                const value = input.value
                createNewLineOnTable(tableID, value)
                saveOnLocalStorage(tableID, value)
                input.value = '' 
            }
        })
        
        removeModal()
    })
})
