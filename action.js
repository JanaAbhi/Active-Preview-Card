let shareBtn=document.querySelector("#shareImg");
let shareBox=document.querySelector(".share__box ");

shareBtn.addEventListener('click',()=>{
    shareBox.classList.toggle("remove")
})