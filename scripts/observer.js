
var floatingNav = document.querySelector("nav.float");
var fixedNav = document.querySelector("nav.fixed");
var observer = new IntersectionObserver((entries,observer ) => {
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            floatingNav.classList.add("fade-in")
            fixedNav.classList.remove("fade-in")
        }
        else{
            floatingNav.classList.remove("fade-in")
            fixedNav.classList.add("fade-in")
        }
    })
});

observer.observe(document.querySelector("nav"));