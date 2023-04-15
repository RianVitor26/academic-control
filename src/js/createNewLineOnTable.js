


export function createNewLineOnTable(tableID, inputValue) {
    const cell = document.createElement('td')
    cell.innerHTML = inputValue

    const newLine = document.createElement('tr')

    newLine.append(cell)

    const table = document.getElementById(tableID)
    table.appendChild(newLine)
}