const backtoTop = document.getElementById("backtoTop");
backtoTop.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: 'smooth'}); 
});