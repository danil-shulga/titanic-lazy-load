async function checkPosition(callback) {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const threshold = height - screenHeight / 2;

  const position = scrolled + screenHeight;
  if (position >= threshold) {
    callback()
  }
}

export { checkPosition }