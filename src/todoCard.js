export default function todoCard(todo) {
    const card = document.createElement('div')
    card.classList.add('card')

    const header = document.createElement('div')
    header.classList.add('headerCard')

    const title = document.createElement('p')
    title.textContent = todo.getTitle()

    header.appendChild(title)
    card.appendChild(header)

    const container = document.createElement('div')
    container.classList.add('containerCard')

    const desc = document.createElement('p')
    desc.textContent = todo.getDescription()

    container.appendChild(desc)
    card.appendChild(container)

    return card
}