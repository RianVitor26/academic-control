export function createNewLineGeneralTable(tableID, obj) {
    const newLine = document.createElement('tr')
    newLine.innerHTML = `
        <td><input disabled type="text" value="${obj.professor}" minlength="2" maxlength="20"></td>
        <td><input disabled type="text" value="${obj.course}" minlength="2" maxlength="20"></td>
        <td><input disabled type="text" value="${obj.room}" minlength="2" maxlength="20"></td>
        <td><input disabled type="text" value="${obj.period}" minlength="2" maxlength="20"></td>
        <td><input disabled type="text" value="${obj.challenge}" minlength="2" maxlength="20"></td>
        <td><input disabled type="text" value="${obj.hour}" minlength="2" maxlength="20"></td>
        <td><i class="fa-solid fa-trash"></i></td>
    `   

    

    const removeIcon = newLine.querySelector('.fa-trash')
    removeIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem('general')) || []
        console.log(list)
        newLine.remove()

    })



    tableID.appendChild(newLine)
}


export function createEntityList(tableID, entity) {

    const table = document.getElementById(`${tableID}`)

    const cell1 = document.createElement('td')
    cell1.innerText = entity

    const newLine = document.createElement('tr')
    newLine.append(cell1)

    table.appendChild(newLine)
}

