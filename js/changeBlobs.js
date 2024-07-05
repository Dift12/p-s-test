const color=document.querySelector("input[type=color]");
color.addEventListener("change" , changeBlobColor);

function changeBlobColor(e){
    let color=e.target.value;
    const blob1=document.querySelector(".blob");
    const blob2=document.querySelector(".blob-2");
    console.log(blob1)
    blob1.style.fill=color
    console.log(blob1.style.fill)
}
