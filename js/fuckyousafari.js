document.addEventListener("DOMContentLoaded", function() {
    let ua = navigator.userAgent.toLowerCase();
    let isSafariMobile = /safari/.test(ua) && /iphone|ipod|ipad/.test(ua) && !/chrome/.test(ua);
  
    if (isSafariMobile) {
      document.body.classList.add('safari-mobile');
    }
    else{
        document.body.classList.add('pene');
    }
  });