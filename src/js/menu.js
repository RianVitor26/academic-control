import { removeModal } from "./modal.js"

const buttons = document.querySelectorAll('.btn')
const panels = document.querySelectorAll('.panel')
const menuMobileBtn = document.querySelector('.menu-mobile-btn')
const menuMobile = document.querySelector('.menu-mobile-container')


// Função para ativar a função 'renderOnePanel' para o botão clicado no momento


export function activeToggleMenu() {
    buttons.forEach(btn => btn.addEventListener("click", (event) => renderOnePanel(event.target)))
}


// Função para renderizar somente um painél na tela

function renderOnePanel(btn) {
    removePanel()
    removeModal()
    let dataset = document.querySelectorAll(`[data-js="${btn.dataset.js}"]`)
    dataset.forEach(dataset => dataset.classList.add('active'))
}


// Função para remover todos os painéis da tela

function removePanel() {
    buttons.forEach(btn => btn.classList.remove('active'))
    panels.forEach(panel => panel.classList.remove('active'))
}


// Função para abrir e fechar o menu mobile ao clicar no ícone menu mobile ou no botão menu entidade

export function openAndCloseMenuMobile() {
    menuMobileBtn.addEventListener('click', () => {
        menuMobile.classList.toggle('open')
        menuMobile.childNodes.forEach(button => button.addEventListener('click', () => {
            menuMobile.classList.remove('open')
        }))
    })
}