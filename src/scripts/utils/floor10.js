function floor10(value) {
  value = value.toString().split(".")
  if(value[1]) return Number(`${value[0]}.${value[1].slice(0,1)}`)
  return value
}

export { floor10 }