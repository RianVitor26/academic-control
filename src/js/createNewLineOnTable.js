export function createNewLineOnTable(tableID, inputValue) {
    // Célula com o valor da entidade

    const cell1 = document.createElement('td')
    cell1.textContent = inputValue


    // Célula com o ícone para editar

    const cell2 = document.createElement('td')
    const editIcon = document.createElement('i')
    editIcon.className = 'fa-solid fa-pen'
    cell2.appendChild(editIcon)


    // Célula com o ícone para remover

    const cell3 = document.createElement('td')
    const removeIcon = document.createElement('i')
    removeIcon.className = 'fa-solid fa-trash'
    cell3.appendChild(removeIcon)


    // Criação da nova linha e inserção das células como filhas

    const newLine = document.createElement('tr')
    newLine.append(cell1, cell2, cell3)


    // Inserção da nova linha na tabela

    const table = document.getElementById(tableID)
    table.appendChild(newLine)


    // Evento para remover uma linha

    removeIcon.addEventListener('click', () => {
        const row = removeIcon.closest('tr')
        row.remove()

        const entityList = JSON.parse(localStorage.getItem(tableID)) || []
        const elementIndex = entityList.indexOf(inputValue)
        if (elementIndex > -1) {
            entityList.splice(elementIndex, 1)
            localStorage.setItem(tableID, JSON.stringify(entityList))
        }
    })


     // Evento para editar uma linha
    
    editIcon.addEventListener('click', () => {
        const row = editIcon.closest('tr')
        const cellToEdit = row.cells[0]
        const newValue = prompt('Por favor, digite o novo valor: ')

        if (newValue) {
            cellToEdit.textContent = newValue

            const entityList = JSON.parse(localStorage.getItem(tableID)) || []
            const elementIndex = entityList.indexOf(inputValue)
            if (elementIndex > -1) {
                entityList.splice(elementIndex, 1, newValue)
                localStorage.setItem(tableID, JSON.stringify(entityList))
            }
        }
    })
}
