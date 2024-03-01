function getLifeStatus(isAlive) {
  if (isAlive) return 'survived'
  return 'deceased'
}

export { getLifeStatus }