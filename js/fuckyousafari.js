document.addEventListener("DOMContentLoaded", function() {
    let ua = navigator.userAgent.toLowerCase();
    let isSafariMobile = /safari/.test(ua) && /iphone|ipod|ipad/.test(ua) && !/chrome/.test(ua);
  
    let fart=new Audio("../sounds/fart.mp3")

    if (isSafariMobile) {
      alert("Parece que estas intentando acceder a este sitio desde Apple IOs, una version simplificada del sitio, compatible con tu navegador se cargara en tu dispositivo.")
      //document.body.classList.add('safari-mobile');
      document.head.innerHTML="";
      fart.play()
      alert("Disfrute de la experience Safari")
    }

  });