

export function createNewLineOnTable(tableID, inputValue) {
    const cell1 = document.createElement('td')
    cell1.innerHTML = inputValue
    const cell2 = document.createElement('td')
    const editIcon = document.createElement('i')
    editIcon.className = 'fa-solid fa-pen'
    cell2.appendChild(editIcon)

    const cell3 = document.createElement('td')
    const removeIcon = document.createElement('i')
    removeIcon.className = 'fa-solid fa-trash'
    cell3.appendChild(removeIcon)

    const newLine = document.createElement('tr')

    newLine.append(cell1)
    newLine.append(cell2)
    newLine.append(cell3)

    const table = document.getElementById(tableID)
    table.appendChild(newLine)

    removeIcon.addEventListener('click', () => {
        //<i> --> <td> --> <tr>.remove()
        const row = removeIcon.parentNode.parentNode;
        row.remove()
        let entityList = JSON.parse(localStorage.getItem(tableID))
        const elementIndex = entityList.indexOf(inputValue)
        entityList.splice(elementIndex, 1)
        localStorage.setItem(tableID, JSON.stringify(entityList))
    })

    editIcon.addEventListener('click', () => {
        //<i> --> <td> --> <tr>.edit()
        const row = editIcon.parentNode.parentNode;
        const cellToEdit = row.cells[0]
        const newValue = prompt('Por favor, digite o novo valor: ')
        if (newValue) {
            cellToEdit.innerHTML = newValue
            let entityList = JSON.parse(localStorage.getItem(tableID))
            const elementIndex = entityList.indexOf(inputValue)
            entityList.splice(elementIndex, 1, newValue)
            localStorage.setItem(tableID, JSON.stringify(entityList))
        }
        else {
            cellToEdit.innerHTML = cellToEdit.innerHTML
        }

    })
}