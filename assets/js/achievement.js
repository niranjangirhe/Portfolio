var title = document.getElementById("title");
var heading = document.getElementById("heading");
var details = document.getElementById("details")
var project = document.getElementById("project");
var github = document.getElementById("github");
var image = document.getElementById("image");

switch(window.location.href.toString().split('#')[1]){
    case "uia": uia(); break;
    case "sih": sih(); break;
    default : window.location.href = "https://girhe.com"; break;
}



function uia()
{
    title.innerHTML="UNESCO-India-Africa (UIA) Hackathon"
    heading.innerHTML = "Winner";
    details.innerHTML =`• Awarded with 300,000 INR prize money by the Education
    Minister and the Vice President of India<br>
    • Soil health report generation in Android app based on image
    processing and deep learning<br>
    • Team consisted of 4 different African nation and was formed
    spontaneously.`

    project.innerHTML+=link("https://github.com/niranjangirhe/ShetkariMitraApp/releases/tag/2.0.0")
    github.innerHTML+=link("https://github.com/niranjangirhe/ShetkariMitraApp")
    image.src='/assets/images/UIA.jpg'
}


function sih()
{
    title.innerHTML="Smart India Hackathon"
    heading.innerHTML = "Winner";
    details.innerHTML =`• Awarded with prize money of 100,000 INR<br>
    • Developed web-portal for online labor complaint handling`

    project.innerHTML+="http://server.girhe.com:4001/"
    github.innerHTML+=link("https://github.com/Team-Yukti/Backend")
    image.src='/assets/images/sih.jpeg'
}

function link(str)
{
    return `<a style="word-wrap:break-word; color:blue;" target="_blank" href="`+str+`">`+str+`</a>`
}
