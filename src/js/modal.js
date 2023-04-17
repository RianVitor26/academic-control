export const registerButtons = document.querySelectorAll('.register-btn')
export const modals = document.querySelectorAll('.modal')
const cancelButtons = document.querySelectorAll('.cancel-btn')


/* 
  Função para alternar a classe open no modal ao clicar em registrar ou novo 
  Modal com classe 'open' = display block, sem a classe open = display none.
*/

export function activeToggleModal() {
    Array.from(registerButtons).forEach(button => {
        button.addEventListener('click', () => {
            Array.from(modals).forEach(modal => {
                modal.classList.toggle('open')
            })
        })
    })

}


// Função para remover os modais que estão abertos ao trocar de menu entidade

export function removeModal() {
    Array.from(modals).forEach(modal => {
        modal.classList.remove('open')
    })
}


// Função para remover o modal ao clicar no botão cancelar

export function cancelModal() {
    Array.from(cancelButtons).forEach(cancelButton => {
        cancelButton.addEventListener('click', () => {
            Array.from(modals).forEach(modal => {
                modal.classList.remove('open')
            })
        }
    )})
}