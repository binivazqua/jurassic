const navBar = document.querySelector(".navbar")
    allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
    li.addEventListener("click", e =>{
        navBar.querySelector(".active").classList.remove("active")
        li.classList.add("active");
    });
    
});