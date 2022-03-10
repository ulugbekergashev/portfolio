var menu = document.querySelector(".menu-div"),
    marker = document.querySelector(".marker"),
    item = document.querySelectorAll("nav a"),
    section1 = document.querySelector("#welcome"),
    progress = document.querySelector(".scroll"),
    totop = document.querySelector(".totop"),
    eshop = document.querySelector(".eshop"),
    dino = document.querySelector(".dino"),
    movie = document.querySelector(".movie"),
    nav = document.querySelector("nav"),
    telegram = document.querySelector(".telegram"),
    card = document.querySelector(".card"),
    app = document.querySelector(".app")
    container = document.querySelector(".container")
    toggle = document.querySelector(".toggle")
    modal = document.querySelector(".modal")
    modalList = document.querySelector(".modal-list")
    js = document.querySelector(".js")
    bs = document.querySelector(".bs")
    jq = document.querySelector(".jq")
    html = document.querySelector(".html")
    css = document.querySelector(".css")
    sass = document.querySelector(".sass")





section1.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".element-box").forEach((shift) => {
    const position = shift.getAttribute("data-attribute");
    const x = (window.innerWidth - event.pageX * position) /90;
    const y = (window.innerHeight - event.pageY * position) /90 ;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
$(document).ready(function(){
    $(".boxes").on("click",function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
    })
})
nav.addEventListener("click",function(evt){
    if(evt.target.classList.contains("boot")||evt.target.parentElement.classList.contains("boot")){
        movie.classList.add("none")
        card.classList.add("none")
        dino.classList.add("none")
        eshop.classList.add("none")
        app.classList.remove("none")
        telegram.classList.remove("none")
        container.classList.add("change")

    }
    else if(evt.target.classList.contains("game")||evt.target.parentElement.classList.contains("game")){
        telegram.classList.add("none")
        card.classList.remove("none")
        dino.classList.remove("none")
        app.classList.add("none")
        movie.classList.add("none")
        eshop.classList.add("none")
        container.classList.add("change")

    }
    else if(evt.target.classList.contains("js")||evt.target.parentElement.classList.contains("js")){
        movie.classList.remove("none")
        card.classList.add("none")
        dino.classList.add("none")
        eshop.classList.remove("none")
        app.classList.add("none")
        telegram.classList.add("none")
        container.classList.add("change")

    }
    else if(evt.target.classList.contains("all")||evt.target.parentElement.classList.contains("all")){
        movie.classList.remove("none")
        card.classList.remove("none")
        dino.classList.remove("none")
        eshop.classList.remove("none")
        app.classList.remove("none")
        telegram.classList.remove("none")
        container.classList.remove("change")

    }
    // else if(evt.target.classList.contains("boot")||evt.target.parentElement.classList.contains("boot")){}

    
})
window.addEventListener("scroll",function(evt){
    if(window.scrollY >820){
        menu.classList.add("menu-fix")
    }else{
        menu.classList.remove("menu-fix")
    }
    if(window.scrollY > 650){
        totop.classList.add("totop-show")
    }else{
        totop.classList.remove("totop-show")
    }
    if(window.scrollY > 630){
        js.classList.add("js1")
        bs.classList.add("bs1")
        jq.classList.add("jq1")
        html.classList.add("html1")
        css.classList.add("css1")
        sass.classList.add("sass1")
    }else{
        js.classList.remove("js1")
        bs.classList.remove("bs1")
        jq.classList.remove("jq1")
        html.classList.remove("html1")
        css.classList.remove("css1")
        sass.classList.remove("sass1")
    }
})

VanillaTilt.init(document.querySelectorAll(".container-bigbox"), {
    max: 14,
    speed: 350,
    glare:true,
    "max-glare":0.3,
});


window.onscroll = function scrollProgress(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll/height)*100
    progress.style.width = scrolled + "%"
}
modalList.onclick = function(evt){
    if(!evt.target.classList.contains("linklar")){
        return
    }
    menutoggle.classList.remove("active")
    modal.classList.remove("modal-open")

}
let menutoggle = document.querySelector('.toggle')
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    if(toggle.classList.contains("active")){
        modal.classList.add("modal-open")
    }else{
        modal.classList.remove("modal-open")
    }
}




AOS.init();