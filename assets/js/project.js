var title = document.getElementById("title");
var heading = document.getElementById("heading");
var details = document.getElementById("details")
var project = document.getElementById("project");
var github = document.getElementById("github");
var paper = document.getElementById("paper");
var vid = document.getElementById("vid");
var vidcontainer = document.getElementById("vidcontainer");

switch (window.location.href.toString().split('#')[1]) {
    case "sts": sts(); break;
    case "shetkari": shetkari(); break;
    case "nganime": nganime(); break;
    case "tech": tech(); break;
    case "splitit": splitit(); break;
    case "ngtube": ngtube(); break;
    case "imagen": imagen(); break;
    case "storeops": storeops(); break;
    default: window.location.href = "https://girhe.com"; break;
}

function storeops() {
    vidcontainer.style.display = 'block'
    vid.src = "https://www.youtube.com/embed/iBbT-Pzn-aA?si=o8vfYA8staZsOwlc"
    title.innerHTML = "StoreOps - Inventory Management System"
    heading.innerHTML = "Next JS | Prisma | Stripe | Vercel | Shadcn/ui | Tailwind CSS | headless UI | Zustand | MySql";
    details.innerHTML = `Developed a comprehensive Next.js 14 e-commerce solution with multi-store admin portal and customer-facing storefront. Admin features
include product/order management, analytics, and scalable APIs. Responsive frontend offers cart functionality, product filtering, and Stripe
integration, utilizing admin portal APIs.`

    project.innerHTML += link('https://storeops-admin.vercel.app/') + '<br>' + link('https://storeops-store-frontend.vercel.app/') + '<br>' + '. .'
    github.innerHTML += link('https://github.com/niranjangirhe/storeops-admin-portal') + '<br>' + link('https://github.com/niranjangirhe/storeops-store-frontend')
    paper.style.display = 'none'
}

function imagen() {
    title.innerHTML = "Imagen - Text to Image and Image Caption Generator"
    heading.innerHTML = "Deep Learning & Computer Vision";
    details.innerHTML = `• Developed a Text to Imageand Image caption generator (CNN, LSTM).`
    project.innerHTML += 'Will update soon'
    github.innerHTML += 'Will update soon'
    paper.style.display = 'none'
}
function ngtube() {
    title.innerHTML = "NGTube - A app to reduce youtube addiction"
    heading.innerHTML = "Android Application";
    details.innerHTML = `• Built a very simple app which take youtube link as a input and plays a youtube video<br> 
    • This extra step every time you watch video will reduce your youtube addiction<br> 
    • There is no auto play, next video recommendation and nothing.`

    project.innerHTML += link('https://girhe.com/NGTube')
    github.innerHTML += link('https://github.com/niranjangirhe/NGTube')
    paper.style.display = 'none'
}

function sts() {
    title.innerHTML = "Smart Traffic System to Optimize the City Traffic"
    heading.innerHTML = "MIT Academy of engineering";
    details.innerHTML = `• Estimation of optimal traffic signal timings for smart traffic control<br>
    • Used Unity game engine to simulate real life traffic`

    project.innerHTML = `Links for project, repo and research paper will be updated after paper publication`
    github.style.display = 'none'
    paper.style.display = 'none'
}


function shetkari() {
    title.innerHTML = "Shetkari Mitra - Mobile App for Farmers"
    heading.innerHTML = "MIT Academy of Engineering";
    details.innerHTML = `• Designed Android application to assist farmers<br>
    • Consists of discussion forum, expert connect, information, etc.<br>
    • Presented and published in Springer’s ICCDN-2021 conference`

    project.innerHTML += link("https://github.com/niranjangirhe/ShetkariMitraApp/releases/tag/2.0.0")
    github.innerHTML += link("https://github.com/niranjangirhe/ShetkariMitraApp")
    paper.innerHTML += link("https://doi.org/10.1007/978-981-19-2004-2_10")
}

function nganime() {
    title.innerHTML = "NGAnime"
    heading.innerHTML = "Android Application";
    details.innerHTML = `• Developed an android application which compiles online Anime
    streaming platforms at one place<br>
    • Implemented features like sharing, export and import data`

    project.innerHTML += link('https://nganimes.web.app/')
    github.style.display = 'none'
    paper.style.display = 'none'
}

function tech() {
    vidcontainer.style.display = 'block'
    vid.src = "https://www.youtube.com/embed/JnKX9F0RtuI"
    title.innerHTML = "Killing Tech"
    heading.innerHTML = "Indie Multiplayer PC and Mobile Game";
    details.innerHTML = `• Developed 3D FPS multiplayer game using unity and blender<br>
    • Used Photon 2 engine for networking<br>
    • Experienced in Rigid body, fluid, cloth, particle and fire simulations`

    project.innerHTML += link('https://tinyurl.com/killingtech')
    github.innerHTML += link('https://github.com/niranjangirhe/killing_Tech')
    paper.style.display = 'none'
}

function splitit() {
    title.innerHTML = "Split It - split group expenses"
    heading.innerHTML = "Web portal";
    details.innerHTML = `• Developed a web app to split common expenses within friends`

    project.innerHTML += link('https://split-it.girhe.com/')
    github.innerHTML += link('https://github.com/niranjangirhe/NGCommonFund')
    paper.style.display = 'none'
}

function link(str) {
    return `<a style="word-wrap:break-word; color:blue;" target="_blank" href="` + str + `">` + str + `</a>`
}
