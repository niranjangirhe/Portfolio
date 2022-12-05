switch(window.location.href.toString().split('#')[1]){
    case "otu": otu(); break;
    default : window.location.href = "https://girhe.com"; break;
}
function otu()
{
    var title = document.getElementById("title");
    var heading = document.getElementById("heading");
    var details = document.getElementById("details")
    var project = document.getElementById("project");
    var github = document.getElementById("github");
    var certificate = document.getElementById("certificate");

    title.innerHTML="Research and Development in Serious Games"
    heading.innerHTML = "Ontario Tech University, Canada (Mitacs GRI funded program)";
    details.innerHTML =`• Designed and implemented Serious games (Threaded Paws)<br>
    • Help users grasp concepts of concurrency and its pitfalls<br>
    • Developed on Unity with form-based modular level designing<br>`

    project.innerHTML+=`<a href="tel:+91 7768989938">+91 7768989938</a>`



}