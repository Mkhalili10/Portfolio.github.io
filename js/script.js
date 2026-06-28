// pre loader ------------------------------------------------------------------------------------
let loader = document.querySelector(".loader")

window.addEventListener("load", function () {
    // this.setTimeout(function () {
    //     console.log("loaded")
    //     let loader = document.querySelector(".loader")
    //     loader.classList.add("loader_hidden")
    //     loader.style.display = "none"
    // }, 1000)
    
    loader.classList.add("loader_hidden")
    loader.style.display = "none"
})


// menu responsive --------------------------------------------------------------------------------
let menu_btn = document.querySelector(".menu_btn")
let navbar = document.querySelector(".navbar")
let menu_flage = 0

menu_btn.addEventListener("click", function () {
    if(menu_flage == 0) {
        navbar.style.height = "15.5rem"
        menu_flage = 1
    }
    else {
        navbar.style.height = "3.45rem"
        menu_flage = 0
    }
})

window.addEventListener("resize", function(){
    n = window.innerWidth
    navbar.style.height = "3.45rem"
    menu_flage = 0
    if(n>576 && n<768) {
        navbar.style.height = "3rem"
    }
    else if (n>768 && n<992) {
        navbar.style.height = "3.63rem"
    }
    else if (n>992 && n<1200) {
        navbar.style.height = "4.3rem"
    }
    else if (n>1200) {
        navbar.style.height = "4.3rem"
    }
    
})


window.addEventListener('click', function (event) {
    if(event.pageY > 250) {
        navbar.style.height = "3.45rem"
        menu_flage = 0
    }
})


// menu avtivate --------------------------------------------------------------------------------------------------------------
let menu_elments = document.querySelectorAll(".navbar_menu_items")
let sections = document.querySelectorAll("section")

menu_elments.forEach((section, index) => {
    section.addEventListener("click", function () {
        window.scrollTo({top: sections[index].offsetTop - 110, left: 0, behavior: "smooth"})

        if(window.innerWidth < 576) {
            navbar.style.height = "3.45rem"
            menu_flage = 0
        }
    })
})


// home btn activate ----------------------------------------------------------------------------------------------------------
let project_btn = document.getElementById("project_view_btn")
let contact_btn = document.getElementById("contact_view_btn")

let array = [project_btn, contact_btn]

array.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        if(index == 0) {
            window.scrollTo({top: sections[3].offsetTop - 90, left: 0, behavior: "smooth"})
        }
        else {
            window.scrollTo({top: sections[4].offsetTop - 90, left: 0, behavior: "smooth"})
        }
    })
})


// night/day mode -------------------------------------------------------------------------------------------------------------
let mode_container = document.querySelector(".mode")
let mode_change = document.querySelector(".mode_change")
let mode = 1;


mode_change.addEventListener("click", function () {
    if(mode == 1) {
        mode_change.style.transform = "translateX(21.5px)"
        mode = 0
    }
    else {
        mode_change.style.transform = "translateX(0)"
        mode = 1
    }
})