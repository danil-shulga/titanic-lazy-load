import { getLifeStatus } from "../utils/getLifeStatus.js"

function createSearchField(item) {
  let searchField = ''
  searchField = searchField.concat(`${item.name}`)
  searchField = searchField.concat(` ${item.age}`)
  searchField = searchField.concat(` ${item.gender}`)
  searchField = searchField.concat(` ${getLifeStatus(item.survived)}`)
  searchField = searchField.concat(` ${item.ticket}`)
  return searchField
}

export { createSearchField }