import { activeToggleMenu, openAndCloseMenuMobile } from "./menu.js"
import { activeToggleModal, cancelModal } from "./modal.js"
import { fillTablesFromLocalStorage } from "./fillTablesFromLocalStorage.js"
import { handleSubmitForm } from "./handleSubmitForm.js"


// Chama as funções que tem que iniciar ao carregar a página
window.addEventListener('load', () => {
    fillTablesFromLocalStorage()
    activeToggleMenu()
    openAndCloseMenuMobile()
    activeToggleModal()
    cancelModal()
    handleSubmitForm()
})

