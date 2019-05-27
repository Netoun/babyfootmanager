export const template = {
  rowGames: game => {
    return `<td>${game.name}</td>
            <td>
              <a class="button is-rounded is-small finish">
                <span class="icon">
                  <i class="fas fa-flag-checkered"></i>
                </span>
              </a>
            </td>
            <td><a class="delete"></a></td>`
  },
  rowChatThem: message => {
    return `<article class="message is-dark them">
              <div class="message-body">
                <strong>${message.username} : </strong>${message.text}
              </div>
            </article>`
  },
  rowChatYou: message => {
    return `<article class="message is-info you">
              <div class="message-body">
                ${message.text}
              </div>
            </article>`
  }
}