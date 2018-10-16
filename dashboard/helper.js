function newID () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
}
function endsWithNumber(string) {
  return Boolean(Number(string[string.length-1]));
}
function noTrailingNumber(string) {
  return endsWithNumber(string) ? string.slice(0, string.length-1): string;
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function toggle(item, arr, condition = function() {return true;}) {
  var index = arr.indexOf(item);
  if (arr.includes(item)) {
    arr.splice(index, 1);
  } else if (condition()) {
    arr.push(item);
  }
}
