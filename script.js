var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
event.preventDefault()
popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addseries=document.getElementById("add-series")
var Dramatitleinput=document.getElementById("Drama-title-input")
var Directorinput=document.getElementById("Director-input")
var Dramadescriptioninput=document.getElementById("Drama-description-input")
addseries.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","kpop")
    div.innerHTML=`<h2>${Dramatitleinput.value}</h2>
                <h5>${Directorinput.value}</h5>
                <p>${Dramadescriptioninput.value}</p>
          <button onclick="deleteseries(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteseries(event){
    event.target.parentElement.remove()
}