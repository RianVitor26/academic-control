import { createNewLineGeneralTable, createEntityList } from "./createLineTables.js"
import { saveOnLocalStorage } from "./saveOnLocalStorage.js"
import { removeModal } from "./modal.js"
import { toggleInfoButton } from './modal.js'

const form = document.querySelector('#form')
export const generalTable = document.querySelector('#general')
const professorInput = document.querySelector('#professor-input')
const courseInput = document.querySelector('#course-input')
const roomInput = document.querySelector('#room-input')
const challengeInput = document.querySelector('#challenge-input')
const periodInput = document.querySelector('#period-input')
const hourInput = document.querySelector('#hour-input')
export const inputs = document.querySelectorAll('input')
    
export function handleSubmitForm() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const professor = professorInput.value
        const course = courseInput.value
        const room = roomInput.value
        const challenge = challengeInput.value
        const period = periodInput.value
        const hour = hourInput.value

        if (!verifyInputs()) return

        let objGeneral = {
            id: Date.now(),
            professor: professor,
            course: course,
            room: room,
            challenge: challenge,
            period: period,
            hour: hour
        }
        createNewLineGeneralTable(generalTable, objGeneral)
        saveOnLocalStorage('general', objGeneral)


       
        Array.from(inputs).forEach(input => {
            const entity = {
                id: objGeneral.id,
                value: input.value
            }
            createEntityList(input.dataset.table, entity)
            saveOnLocalStorage(input.dataset.table, entity)
        })  

        clearInputs()
        removeModal()
        toggleInfoButton()
    })
}


function clearInputs() {
    inputs.forEach(input => input.value = '')
}

function verifyInputs() {
    let valid = true
    inputs.forEach(input => {
        if (input.value.trim().length === 0) {
            valid = false
        }
    })
    return valid
}
