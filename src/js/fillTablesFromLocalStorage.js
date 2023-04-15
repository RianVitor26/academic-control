import { forms } from './main.js'
import { createNewLineOnTable } from './createNewLineOnTable.js'

export function fillTablesFromLocalStorage() {
    Array.from(forms).forEach(form => {
        let tableID = form.dataset.table

        let entities = JSON.parse(localStorage.getItem(tableID))
        if (entities === null) {
            entities = []
        } else if (!Array.isArray(entities)) {
            entities = [entities]
        }

        entities.forEach(entity => {
            createNewLineOnTable(tableID, entity)
        })
    })
}
