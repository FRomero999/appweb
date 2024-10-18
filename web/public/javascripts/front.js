console.log("Hola mundo...");

document.querySelector("input#lenguaje").value = navigator.userAgent;

document.querySelector("a#open-offcanvas").addEventListener("click",()=>{
    document.querySelector("aside#offcanvas").classList.add("show");
});

document.querySelector("#offcanvas button.close").addEventListener("click",()=>{
    document.querySelector("aside#offcanvas").classList.remove("show");
});

document.querySelectorAll("#galeria .inner figure").forEach( (el)=>{
    el.addEventListener("click",(event)=>{
        const fig = el;
        console.log(fig);
        const image = fig.querySelector("img").src;
        document.querySelector("dialog#lightbox img").src = image;
        document.querySelector("dialog#lightbox").showModal();
    })
})