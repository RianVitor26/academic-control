import { createNewLineOnTable } from "./createNewLineOnTable.js"
import { saveOnLocalStorage } from './saveOnLocalStorage.js'
import { removeModal } from './modal.js'

export const forms = document.querySelectorAll('form')
const inputForms = document.querySelectorAll('.input-form')

// Função para lidar com o 'submit' dos  formuláriios
// 'Array.from()' transforma uma lista de elementos HTML para uma Array, possibilitando o uso de métodos de Array
// 'data.set.table' pega o valor de todos os data-set com o sufixo table pra fazer referência ao ID da tabela ao inserir uma nova linha

export function handleSubmitForm() {
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const tableID = form.dataset.table
            Array.from(inputForms).forEach(input => {
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

}