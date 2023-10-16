
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar")
const header = document.querySelector(".logo")
const links = document.querySelectorAll(".linkClass")
const navLines = document.querySelector(".nav-lines")
hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    if(navbar.classList.contains("active")){
        navLines.classList.remove('fa-solid', 'fa-bars', 'nav-lines')
        navLines.classList.add('fa-solid', 'fa-xmark', 'nav-lines')
    }
    else{
        navLines.classList.remove('fa-solid', 'fa-xmark', 'nav-lines')
        navLines.classList.add('fa-solid', 'fa-bars', 'nav-lines')
    }
})
function changeColor(value){
    if(value < 50){
        header.classList.remove("add-color")
        links.forEach((link)=>{
            link.classList.remove("addLink-color")
        })
    }
    else{
        header.classList.add("add-color")
        links.forEach((link)=>{
            link.classList.add("addLink-color")
        })
    }
}


const centreLogo = document.getElementById("centreLogo")
const leftTop = document.getElementById("leftTop")
const rightTop = document.getElementById("rightTop")
const leftBottom = document.getElementById("leftBottom")
const rightBottom = document.getElementById("rightBottom")
const lastGround = document.getElementById("lastGround")
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
     centreLogo.style.marginBottom = value * -1.5 + 'px';
     leftTop.style.left= value * -1.5 + 'px'
     rightTop.style.right= value * -1.5 + 'px'
     leftBottom.style.left= value * 0.6 + 'px'
     rightBottom.style.right= value * 0.6 + 'px'
    changeColor(value);
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-chevron-down'){
            icon.className = 'fa-solid fa-chevron-up'
        }
        else{
            icon.className = 'fa-solid fa-chevron-down'
        }
    })
})