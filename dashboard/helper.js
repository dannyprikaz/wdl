function newID () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function toggle(item, arr) {
  var index = arr.indexOf(item);
  if (arr.includes(item)) {
    arr.splice(index, 1);
  } else {
    arr.push(item);
  }
}
