let toggle = document.querySelector(".toggle");
let circle = document.querySelector(".circle");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".logo");
let anc = document.querySelectorAll(".list");

toggle.addEventListener("click", () => {
    circle.classList.toggle("active");
    if (circle.classList.contains("active")) {
        nav.classList.add("bg");
       logo.style.color = "black";
       console.dir(anc);
       for(a in anc){
        if(a.contains("col2")){
            a.classList.add("col2");
        }else{
            a.classList.remove("col2");
        }
       }
       
       
    } else {
        nav.classList.remove("bg");
        logo.style.color = "#5C8374";
        for(a in anc){
            if(a.contains("col2")){
                a.classList.remove("col2");
            }else{
                a.classList.add("col2");
            }
        }
    }
}); 