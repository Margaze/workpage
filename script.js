
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




