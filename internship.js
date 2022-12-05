var title = document.getElementById("title");
var heading = document.getElementById("heading");
var details = document.getElementById("details")
var project = document.getElementById("project");
var github = document.getElementById("github");
var certificate = document.getElementById("certificate");

switch(window.location.href.toString().split('#')[1]){
    case "otu": otu(); break;
    case "mitaoe": mitaoe(); break;
    case "salvation": salvation(); break;
    default : window.location.href = "https://girhe.com"; break;
}



function otu()
{
    title.innerHTML="Research and Development in Serious Games"
    heading.innerHTML = "Ontario Tech University, Canada (Mitacs GRI funded program)";
    details.innerHTML =`• Designed and implemented Serious games (Threaded Paws)<br>
    • Help users grasp concepts of concurrency and its pitfalls<br>
    • Developed on Unity with form-based modular level designing<br>`

    project.innerHTML+=link("http://www.sqrlab.ca/threaded-paws/")
    github.innerHTML+=link("https://github.com/seer-lab/Threaded-Paws")
    certificate.innerHTML+=`<a style="color:blue;" target="_blank" href="./certificate/Certificate of Completion - Girhe (1).pdf">Link</a>`
}


function mitaoe()
{
    title.innerHTML="Web-Based Elective Allocation System"
    heading.innerHTML = "MIT Academy of Engineering";
    details.innerHTML =`• Automatization of the manual elective allocation process<br>
    • Built automatic elective allocation algorithm<br>
    • Developed web-portal based interface with user and admin side<br>`

    project.innerHTML+=link("https://openelective.mitaoe.ac.in/index.html")
    github.innerHTML+=link("https://github.com/open-elective/open-elective")
    certificate.innerHTML+=`<a style="color:blue;" target="_blank" href="./certificate/MITAOE web internship.pdf">Link</a>`
}

function salvation()
{
    title.innerHTML="Game Development"
    heading.innerHTML = "Salvation Games";
    details.innerHTML =`• Design & development of a Hyper casual mobile game using Unity<br>
    • Engineered movements using concepts of Mechanics<br>`

    project.style.display='none'
    github.style.display='none'
    certificate.innerHTML+=`<a style="color:blue;" target="_blank" href="./certificate/Game Dev Internship.pdf">Link</a>`
}

function link(str)
{
    return `<a style="word-wrap:break-word; color:blue;" href="`+str+`">`+str+`</a>`
}
