document.addEventListener("DOMContentLoaded", function() {
    let ua = navigator.userAgent.toLowerCase();
    let isSafariMobile = /safari/.test(ua) && /iphone|ipod|ipad/.test(ua) && !/chrome/.test(ua);
  
    


    if (isSafariMobile) {
      let fart=new Audio("../sounds/fart.mp3");

      /*Opefully this gets around the autoplay policy, and the user will interact with the site first*/
      setTimeout(()=>{
        alert("Parece que estas navegando en este sitio desde Apple IOs, una version simplificada del sitio, compatible con tu navegador se cargara en tu dispositivo.")
        fart.play();
        const links=document.head.querySelectorAll("link");
        links.forEach(link=> link.href="")
        alert("Disfrute de la experience Safari")
      }, 5000)
      
      //document.body.classList.add('safari-mobile');

  }

  });