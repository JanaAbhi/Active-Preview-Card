let shareBtn=document.querySelector("#shareImg");
let shareBox=document.querySelector(".share__box ");
let shareImgBtn=document.querySelector(".shareButton")

shareBtn.addEventListener('click',()=>{
    shareBox.classList.toggle("remove");
})