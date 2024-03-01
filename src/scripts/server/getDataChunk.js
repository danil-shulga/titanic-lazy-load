function getDataChunk(data, page, size) {
  if (page === 1) {
    return data.slice(0, size)
  }
  return data.slice((page * size), (page * size + size))
}

export { getDataChunk }