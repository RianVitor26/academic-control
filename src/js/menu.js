import { removeModal } from "./modal.js"
const buttons = document.querySelectorAll('.btn')
const panels = document.querySelectorAll('.panel')

//RENDER A UNIQUE MENU

export function toggleMenu() {
    buttons.forEach(btn => btn.addEventListener("click", () => renderOnePanel(event.target)))
}

function renderOnePanel(btn) {
    removePanel()
    removeModal()
    let dataset = document.querySelectorAll(`[data-js="${btn.dataset.js}"]`)
    dataset.forEach(dataset => dataset.classList.add('active'))
}

function removePanel() {
    buttons.forEach(btn => btn.classList.remove('active'))
    panels.forEach(panel => panel.classList.remove('active'))
}

