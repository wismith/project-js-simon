function debug(object) {
  document.querySelector('#debug').innerHTML = `<pre>${JSON.stringify(object, null, 2)}</pre>`
}
