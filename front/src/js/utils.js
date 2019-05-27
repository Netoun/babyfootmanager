export const removeElement = (parent, child) => {
  parent.removeChild(child)
}

export const removeClassElement = (element, _class) => {
  element.classList.remove(_class)
}

export const addClassElement = () => {

}

export const addEventButtonClick = (element, socket, func) => {
  element.addEventListener("click", event => {
    func(event, socket)
  })
}

export const addEventButtonKey = (element, socket, func) => {
  element.addEventListener("keyup", event => {
    func(event, socket)
  })
}

export const addEventButtonToRow = (element, socket, row, func) => {
  element.addEventListener('click', () => {
    func(socket, row)
  })
}