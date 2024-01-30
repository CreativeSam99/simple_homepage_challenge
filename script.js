const menu = document.querySelector(".try")
const open_btn = document.querySelector("#open_menu")
const close_btn = document.querySelector("#close_menu")
const form = document.querySelector("form")

// opening nav menu
open_btn.addEventListener('click', () => {
    open_btn.style.display = "none"
    close_btn.style.display = "block"
    menu.style.display = "block"
    form.style.display = "block"
    document.querySelector("nav > div").style.backgroundColor = "white"
})

// closing nav menu

close_btn.addEventListener('click', () => {
    open_btn.style.display = "block"
    close_btn.style.display = "none"
    menu.style.display = "none"
    form.style.display = "none"
    document.querySelector("nav > div").style.backgroundColor = "transparent"
})


// turning dark mode on/off
const toggle = document.querySelector("#toggle")

toggle.addEventListener('change', function(e) {
    
    if(e.target.checked) {
        document.querySelector("body").style.backgroundColor = "#111729"
        document.querySelector("h1").style.color = "white"
        document.querySelector(".left > p").style.color = "white"
        document.querySelectorAll("li a").forEach(a => {
            a.addEventListener('mouseover', () => {
                a.style.color = "white"
            })
            a.addEventListener('mouseout', () => {
                a.style.color = "#909193"
            })
        });
    }
    else {
        document.querySelector("body").style.backgroundColor = "#F2F9FE"
        document.querySelector("h1").style.color = "#223344"
        document.querySelector(".left > p").style.color = "#223344"
    }
})