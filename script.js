
// Sobre
let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
for(tablink of tablinks){
tablink.classList.remove('active-link')
}
for(tabcontent of tabcontents){
tabcontent.classList.remove('active-tab')
}
event.currentTarget.classList.add('active-link');
document.getElementById(tabname).classList.add('active-tab')

}




let sidemenu = document.getElementById("sidemenu")

function openmenu(){
sidemenu.style.right = "0";
}

function closemenu(){
sidemenu.style.right = "-200px";
}




// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbw3A6LMB522bODZa5Pin_gRz_rBB84-ayPMb458pbd3ULGHoDS0Jt11-RP8idXLPq60/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})


// modal
const btn = document.querySelector('#link')
const modal = document.querySelector(".modal-links")
const btnClose = document.querySelector(".modal-links button")

btn.onclick = function(){
modal.showModal()
}

btnClose.onclick = function(){
  modal.close()
}


const btnP = document.querySelector('#pabx-cloud')
const modalP = document.querySelector(".modal-voz")
const btnCloseP = document.querySelector(".modal-voz button")

btnP.onclick = function(){
  modalP.showModal()
}

btnCloseP.onclick = function(){
  modalP.close()
}


const btnC = document.querySelector('#cloud')
const modalC = document.querySelector(".modal-cloud")
const btnCloseC = document.querySelector(".modal-cloud button")

btnC.onclick = function(){
  modalC.showModal()
}

btnCloseC.onclick = function(){
  modalC.close()
}






// // Well
// document.querySelector('.items-telec')
// .addEventListener("wheel", event => {
// if(event.deltaY>0){
//   event.target.scrollBy(600, 0)
// } else {
//   event.target.scrollBy(-600, 0)
// }
// } )
