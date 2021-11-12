export default function header() {
    const header = document.createElement('header')
    header.classList.add('title')

    const title = document.createElement('p')
    title.textContent = "To-Do-List"

    header.appendChild(title)

    return header
}