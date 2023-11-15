const accordItemHeader=document.querySelectorAll(".accordion-item-header")
accordItemHeader.forEach(num=>{
num.addEventListener("click",event=>{
    const currentlyActiveAccordionItemheader=document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemheader && currentlyActiveAccordionItemheader!==num){
        currentlyActiveAccordionItemheader.classList.toggle("active");
        currentlyActiveAccordionItemheader.nextElementSibling.style.maxHeight=0;
    }
    num.classList.toggle("active");
    const accordionItemBody=num.nextElementSibling;
    if(num.classList.contains("active")){
        accordionItemBody.style.maxHeight= accordionItemBody.scrollHeight +"px";
    }
    else{
        accordionItemBody.style.maxHeight=0;
    }
});
});