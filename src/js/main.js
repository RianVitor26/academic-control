import { toggleMenu } from "./menu.js";
import { toggleModal, cancelModal, removeModal } from "./modal.js";
import { createNewLineOnTable } from "./createNewLineOnTable.js";

const createNewDataInputs = document.querySelectorAll('.create-new-data-input')

const forms = document.querySelectorAll('form')


toggleMenu()
toggleModal()
cancelModal()



Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const tableID = form.dataset.table
        console.log(tableID)
        Array.from(createNewDataInputs).forEach(input => {
            if (input.value.length > 0) {
                const value = input.value
                createNewLineOnTable(tableID, value)
                input.value = '' 
            }
        })
        
        removeModal()
    })
})
