document.addEventListener("DOMContentLoaded",()=>{});
const  btn=document.getElementById("showMoreBtn");
const hiddenFeatures=document.querySelectorAll(".feature.hidden");
document.querySelectorAll(".hidden");
btn.addEventListener("click",()=>{
    hiddenFeatures.forEach(feature=>{
        feature.classList.toggle("hidden");
    });
        btn.textContent=btn.textContent==="Show More"?"Show Less":"Show More";
    });

