export function saveOnLocalStorage(key, value) {
    let entities = JSON.parse(localStorage.getItem(key))
    if (entities === null) {
        entities = []
    } else if (!Array.isArray(entities)) {
        entities = [entities]
    }
    entities.push(value)
    localStorage.setItem(key, JSON.stringify(entities))
    console.log('salvou')
}