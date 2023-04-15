export const registerButtons = document.querySelectorAll('.register-btn')
export const modals = document.querySelectorAll('.modal')
const cancelButtons = document.querySelectorAll('.cancel-btn')


export function toggleModal() {
    Array.from(registerButtons).forEach(button => {
        button.addEventListener('click', () => {
            Array.from(modals).forEach(modal => {
                modal.classList.toggle('open')
            })
        })
    })

}

export function removeModal() {
    Array.from(modals).forEach(modal => {
        modal.classList.remove('open')
    })
}

export function cancelModal() {
    Array.from(cancelButtons).forEach(cancelButton => {
        cancelButton.addEventListener('click', () => {
            Array.from(modals).forEach(modal => {
                modal.classList.remove('open')
            })
        }
    )})
}