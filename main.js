var id_of_project = []
var preview_resource = []
var actual_resource = []
var projectorstore_elem = document.getElementById("projectsle") 
var preview_plchldr = document.getElementById("previewplaceholder")


function mousein(a) {
    console.log("id")
    console.log(preview_resource)
    preview_plchldr.toggleAttribute("hidden")
    document.getElementById("currentlyselectedpreview").src = preview_resource[a - 1]
    document.getElementById("currentlyselectedpreview").removeAttribute("hidden")
}

function mouseout(a) {
    document.getElementById("currentlyselectedpreview").toggleAttribute("hidden")
    preview_plchldr.removeAttribute("hidden")
}

function closeviewbvo() {
    document.getElementById("viewbox").style.scale = "0"
    document.getElementById("viewbox").style.bottom = "-200%"

}

function openviewbox(a){
    document.getElementById("viewboximg").src = actual_resource[a - 1]
    document.getElementById("viewbox").style.bottom = "0"
    document.getElementById("viewbox").style.scale = "1"
}




function projectadder(date,name,previeww,vieww){
    
    
    let id = id_of_project.length + 1
    let template = `
    <div id="${id}" onclick="openviewbox('${id}')" onmouseenter="mousein('${id}')" onmouseleave="mouseout('${id}')"><h5>${date}</h5><h5>|</h5><h5>${name}</h5></div>
    `
    preview_resource.push(previeww)
    actual_resource.push(vieww)
    projectorstore_elem.innerHTML = projectorstore_elem.innerHTML + template
}


function contactonemail(a){
    open(`mailto:${a}`)
}

function contactdiscord(a){
    open(`${a}`)
}



projectadder("THIS IS THE DATE",
"HERE GOES PROJECT NAME",
"pexels-pixabay-159045.jpg" //this is project's preview image
,"https://www.youtube.com/embed/73_1biulkYk?si=qTvTrBHnBMV0foMz") //this is project's video that will open on click u paste utube url here








