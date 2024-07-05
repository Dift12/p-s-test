const navLinks=document.querySelectorAll("nav > a")
const sections=document.querySelectorAll("section")
const badges=document.querySelectorAll(".badge")

window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop ) {
        current = section.getAttribute("id"); }
    });

    badges.forEach((badge) => {
      badge.classList.remove("active");
      if (badge.id.includes(current)) {
        badge.classList.add("active");
      }
    });
  
    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.href.includes(current)) {
        a.classList.add("active");
      }
    });
  };
