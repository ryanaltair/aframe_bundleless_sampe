/* global fetch */
import * as AFRAME from 'aframe'
console.log(AFRAME)
async function init (
  selectStr = '#aframe_inside',
  urlSceneXML = './scene.xml'
) {
  const divEl = document.querySelector(selectStr)
  fetch(urlSceneXML)
    .then(response => response.text())
    .then(data => {
      console.log('show xml', data)
      divEl.innerHTML = data
      console.log('show sceneEl', divEl)
    })
    .catch(reason => {
      console.error(reason)
    })
}
init()
