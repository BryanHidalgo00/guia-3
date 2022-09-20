
const links = document.querySelectorAll("a");
 
links.forEach(link => {
    link.addEventListener("click", (e) =>{e.preventDefault()
       let resp = confirm(`¿Está seguro que quiere visitar el sitio: ${link.href}`);
       resp ? window.open(link.href, '_blank') : null
    })
});


