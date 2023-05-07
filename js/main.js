var typingEffect=new Typed(".multiText",{
strings:["coder","fullstack","Valeria"],
loop:true,
typeSpeed:100,
backSpeed:80,
backDelay: 1500
})

let buttonDownload=document.getElementById("download");
buttonDownload.addEventListener("click",()=>{
   const span=document.querySelector("aspan");
   buttonDownload.style.paddingRight='10px;';
   span.style.visibility="visible";
   setTimeout(()=>{
    span.style.visibility="hidden";
    buttonDownload.style.transition="1 ease-in-out";
    buttonDownload.style.paddingRight="0px";
   },3000);
})