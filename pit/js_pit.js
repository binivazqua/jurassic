const = form = document.querySelector("form"),
    nextBtn = document.querySelector(".nextBtn"),
    backBtn = document.querySelector(".backBtn"),
    allInput = document.querySelector(".first input");
 
nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input =>){
        if(input.value != "" ) {
            form.classlist.add('secActive');
        } else {
            form.classList.add('secActive');
            alert("input is empty!")
        }
    })
})