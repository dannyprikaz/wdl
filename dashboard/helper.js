function newID () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
