document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    const form = document.querySelector("form"),
        nextBtn = document.querySelector(".nextBtn"),
        backBtn = document.querySelector(".backBtn"),
        allInput = document.querySelectorAll(".first input");

    nextBtn.addEventListener("click", () => {
        const anyInputNotEmpty = Array.from(allInput).some(input => input.value.trim() !== "");

        if (anyInputNotEmpty) {
            form.classList.add('secActive');
        } else {
            console.log("Please fill in at least one input.");
        }
    });

    backBtn.addEventListener("click", () => form.classList.remove('secActive'));
});

/*
const form = document.querySelector("form"),
    nextBtn = document.querySelector(".nextBtn"),
    backBtn = document.querySelector(".backBtn"),
    allInput = document.querySelectorAll(".first input");
 
nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != " ") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');
          
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
*/